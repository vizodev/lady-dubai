import type { TextLocales } from "./locales"

export type BlogPost = {
	id: number
	slug: string
	title_metadata?: TextLocales
	description_metadata?: TextLocales
	banner: string
	title: TextLocales
	description: TextLocales
	text_html: TextLocales
}

export type BlogData = {
	title: TextLocales
	title_metadata?: TextLocales
	description_metadata?: TextLocales
}
