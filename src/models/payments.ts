import type { CheckoutSchemaSubmit } from "~/formSchemas"
import type { Currency, TripPackage } from "./tripPackage"

export type GetPaymentInfoBody = {
	data: CheckoutSchemaSubmit
	tripPackage: TripPackage
	currency: Currency
}

export type GetPaymentInfoResponse = {
	link: string
}
