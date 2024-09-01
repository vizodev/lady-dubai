import * as yup from "yup"
import {
	booleanFieldRequired,
	dateFieldMaxTodayRequired,
	dateFieldMinTodayRequired,
	emailFieldRequired,
	numberFieldRequired,
	textFieldRequired,
} from "./commonFields"

export type CheckoutSchemaSubmit = {
	email: string
	countryCode: number
	phone: number
	users: {
		name: string
		lastName: string
		birthday: Date
		gender: string
		nationality: string
		passportId: string
		passportExpiration: Date
		passportIssuedFrom: string
	}[]
}

export const checkoutSchema = yup.object({
	email: emailFieldRequired,
	countryCode: numberFieldRequired,
	phone: numberFieldRequired,
	privacyPolicy: booleanFieldRequired,
	users: yup.array().of(
		yup.object({
			name: textFieldRequired,
			lastName: textFieldRequired,
			birthday: dateFieldMaxTodayRequired,
			gender: textFieldRequired,
			nationality: textFieldRequired,
			passportId: textFieldRequired,
			passportExpiration: dateFieldMinTodayRequired,
			passportIssuedFrom: textFieldRequired,
		})
	),
})
