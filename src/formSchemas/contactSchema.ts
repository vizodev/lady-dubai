import * as yup from "yup"
import {
	checkboxFieldOptional,
	emailFieldRequired,
	textFieldRequired,
} from "./commonFields"

export type ContactSchemaSubmit = {
	email: string
	name: string
	message: string
	tripPackages: string[]
}

export const contactSchema = yup.object({
	email: emailFieldRequired,
	name: textFieldRequired,
	message: textFieldRequired,
	tripPackages: checkboxFieldOptional,
})
