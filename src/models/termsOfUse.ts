import type { TextType } from "./locales"

export type TermsOfUseData = {
	title: TextType
	banner: string
	text_html: TextType
	title_metadata?: TextType
	description_metadata?: TextType
}
