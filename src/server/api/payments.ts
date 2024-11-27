import stripe from "stripe"
import { GetPaymentInfoBody, GetPaymentInfoResponse } from "~/models"
import {
	STRIPE_CANCEL_URL,
	STRIPE_SECRET_KEY,
	STRIPE_SUCCESS_URL,
} from "../../constants"
import { getTripPackagePrice } from "../../utils/getTripPackagePrice"

export default defineEventHandler(async (event) => {
	const body: GetPaymentInfoBody = await readBody(event)

	const client = new stripe(STRIPE_SECRET_KEY)

	const amount = getTripPackagePrice(
		body.tripPackage,
		body.flight,
		body.data.users.length,
		body.currency
	)
	const checkoutSession = await client.checkout.sessions.create({
		metadata: {
			data: JSON.stringify(body.data),
		},
		line_items: [
			{
				price_data: {
					currency: body.currency,
					product_data: {
						name: `Booking \n${body.data.users.map((i) => i.name).join(", ")}`,
					},
					unit_amount: amount * 100,
				},
				quantity: 1,
			},
		],
		mode: "payment",
		success_url: STRIPE_SUCCESS_URL,
		cancel_url: STRIPE_CANCEL_URL,
	})

	return {
		link: checkoutSession.url,
	} as GetPaymentInfoResponse
})
