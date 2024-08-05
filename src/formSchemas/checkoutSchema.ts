import * as yup from "yup"
import {
	booleanFieldRequired,
	emailFieldRequired,
	numberFieldOptional,
	numberFieldRequired,
	numberFieldSpecificLenghtOptional,
	textFieldOptional,
	textFieldRequired,
} from "./commonFields"
import { validationMessages } from "~/validationMessages"

export type CheckoutSchemaSubmit = {
	email: string
	countryCode: number
	phone: number
	paymentMethod: string
	cardNumber?: number
	cardName?: string
	cardExpiration?: number
	cardCvv?: number
	users: {
		name: string
		lastName: string
		birthday: string
		gender: string
		nationality: string
		passportNumber: number
		passportExpiration: number
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
			birthday: textFieldRequired,
			gender: textFieldRequired,
			nationality: textFieldRequired,
			passportNumber: numberFieldRequired,
			passportExpiration: numberFieldRequired,
			passportIssuedFrom: textFieldRequired,
		})
	),
	cardNumber: ifCreditCardField(numberFieldOptional),
	cardName: ifCreditCardField(textFieldOptional),
	cardExpiration: ifCreditCardField(numberFieldOptional),
	cardCvv: ifCreditCardField(numberFieldSpecificLenghtOptional(3)),
})
