import type { CheckoutSchemaSubmit } from "~/formSchemas"
import type { TripPackage } from "./tripPackage"

export type GetPaymentInfoBody = {
	data: CheckoutSchemaSubmit
	tripPackage: TripPackage
}

export type GetPaymentInfoResponse = {
	link: string
}
