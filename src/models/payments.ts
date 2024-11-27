import type { CheckoutSchemaSubmit } from "~/formSchemas"
import type { Currency, Flight, TripPackage } from "./tripPackage"

export type GetPaymentInfoBody = {
	data: CheckoutSchemaSubmit
	tripPackage: TripPackage
	flight?: Flight
	currency: Currency
}

export type GetPaymentInfoResponse = {
	link: string
}
