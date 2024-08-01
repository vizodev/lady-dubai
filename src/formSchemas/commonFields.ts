import * as yup from "yup"
import { validationMessages } from "../validationMessages"

// Text fields
export const textFieldRequired = yup
	.string()
	.required(validationMessages.emptyField)

// Checkbox fields
export const checkboxFieldOptional = yup.array()

// Miscellaneous
export const emailFieldRequired = textFieldRequired.email(
	validationMessages.validEmail
)
