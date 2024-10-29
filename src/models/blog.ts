import type { TextType } from "./locales"

export type BlogPost = {
	id: number
	slug: string
	title_metadata?: TextType
	description_metadata?: TextType
	banner: string
	title: TextType
	description: TextType
	text_html: TextType
}

export type BlogData = {
	title: TextType
	title_metadata?: TextType
	description_metadata?: TextType
}
