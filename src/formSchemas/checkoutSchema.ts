import * as yup from "yup"
import {
	booleanFieldRequired,
	dateFieldMaxTodayRequired,
	dateFieldMinTodayRequired,
	emailFieldRequired,
	numberFieldOptional,
	numberFieldRequired,
	numberFieldSpecificLenghtOptional,
	textFieldOptional,
	textFieldRequired,
} from "./commonFields"
import { validationMessages } from "~/constants/validationMessages"

export type CheckoutSchemaSubmit = {
	email: string
	countryCode: number
	phone: number
	paymentMethod: string
	cardNumber?: number
	cardName?: string
	cardExpiration?: Date
	cardCvv?: number
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

export const creditCardValue = "creditCard"
const ifCreditCardField = (field: yup.StringSchema): yup.StringSchema => {
	return field.when("paymentMethod", {
		is: creditCardValue,
		then: (s) => s.required(validationMessages.emptyField),
	})
}

export const checkoutSchema = yup.object({
	email: emailFieldRequired,
	countryCode: numberFieldRequired,
	phone: numberFieldRequired,
	paymentMethod: textFieldRequired,
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
	cardNumber: ifCreditCardField(numberFieldOptional),
	cardName: ifCreditCardField(textFieldOptional),
	cardExpiration: ifCreditCardField(numberFieldOptional),
	cardCvv: ifCreditCardField(numberFieldSpecificLenghtOptional(3)),
})
