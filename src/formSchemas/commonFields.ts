import * as yup from "yup"
import { validationMessages } from "../validationMessages"

// Text fields
export const textFieldOptional = yup.string()
export const textFieldRequired = textFieldOptional.required(
	validationMessages.emptyField
)

// Number fields
export const numberFieldOptional = yup
	.string()
	.matches(/^[0-9]+$/, validationMessages.onlyNumbers)
export const numberFieldRequired = numberFieldOptional.required(
	validationMessages.emptyField
)
export const numberFieldSpecificLenghtOptional = (length: number) =>
	numberFieldOptional
		.min(length, validationMessages.onlySpecificDigits(length))
		.max(length, validationMessages.onlySpecificDigits(length))

// Checkbox fields
export const checkboxFieldOptional = yup.array()

// Booleans fields
export const booleanFieldRequired = yup
	.boolean()
	.required(validationMessages.emptyField)

// Miscellaneous
export const emailFieldRequired = textFieldRequired.email(
	validationMessages.validEmail
)
