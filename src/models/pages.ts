import type { TextType } from "./locales"

export type PageData = {
	title: TextType
	banner: string
	text_html: TextType
	title_metadata?: TextType
	description_metadata?: TextType
}
