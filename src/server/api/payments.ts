import stripe from "stripe"
import { STRIPE_SECRET_KEY } from "../constants"
import { useRoute } from "vue-router"

export default defineEventHandler(async (event) => {
	const query = getQuery(event)

	const priceId = query.priceId as string
	const quant = query.quant as number

	const client = new stripe(STRIPE_SECRET_KEY)

	const paymentLink = await client.paymentLinks.create({
		line_items: [
			{
				price: priceId,
				quantity: quant,
			},
		],
	})

	return {
		link: paymentLink.url,
	}
})
