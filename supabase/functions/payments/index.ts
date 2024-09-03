// Follow this setup guide to integrate the Deno language server with your editor:
// https://deno.land/manual/getting_started/setup_your_environment
// This enables autocomplete, go to definition, etc.

// Setup type definitions for built-in Supabase Runtime APIs
import "jsr:@supabase/functions-js/edge-runtime.d.ts"
import Stripe from "https://esm.sh/stripe@16.9.0?target=deno"
import { createClient } from "jsr:@supabase/supabase-js@2"
import {
	STRIPE_SECRET_KEY,
	STRIPE_API_VERSION,
	STRIPE_WEBHOOK_SIGNING_SECRET,
	SUPABASE_URL,
	SUPABASE_KEY,
	SUPABASE_BOOKINGS_TABLE,
} from "constants"

const stripe = new Stripe(STRIPE_SECRET_KEY, {
	// This is needed to use the Fetch API rather than relying on the Node http
	// package.
	apiVersion: STRIPE_API_VERSION,
	httpClient: Stripe.createFetchHttpClient(),
})
// This is needed in order to use the Web Crypto API in Deno.
const cryptoProvider = Stripe.createSubtleCryptoProvider()

Deno.serve(async (req) => {
	// First step is to verify the event. The .text() method must be used as the
	// verification relies on the raw request body rather than the parsed JSON.
	try {
		const body = await req.text()
		const signature = req.headers.get("Stripe-Signature")

		const receivedEvent = await stripe.webhooks.constructEventAsync(
			body,
			signature!,
			STRIPE_WEBHOOK_SIGNING_SECRET,
			undefined,
			cryptoProvider
		)

		switch (receivedEvent.type) {
			case "checkout.session.completed": {
				const { metadata } = receivedEvent.data.object
				const metadataJson = JSON.parse(metadata.data)

				// Create a Supabase client with the Auth context of the logged in user.
				const supabaseClient = createClient(
					// Supabase API URL - env var exported by default.
					SUPABASE_URL,
					// Supabase API ANON KEY - env var exported by default.
					SUPABASE_KEY,
					// Create client with Auth context of the user that called the function.
					// This way your row-level-security (RLS) policies are applied.
					{
						global: {
							headers: { Authorization: req.headers.get("Authorization")! },
						},
					}
				)

				const { error } = await supabaseClient
					.from(SUPABASE_BOOKINGS_TABLE)
					.insert({
						email: metadataJson.email,
						countryCode: metadataJson.countryCode,
						phone: metadataJson.phone,
						users: metadataJson.users,
					})
					.select()

				if (error) throw error
			}
		}

		return new Response(JSON.stringify({ ok: true }), { status: 200 })
	} catch (err) {
		console.error(err)
		return new Response(err.message, { status: 400 })
	}
})
