import type { TextLocales } from "./locales"

export type PageData = {
	title: TextLocales
	banner: string
	text_html: TextLocales
	title_metadata?: TextLocales
	description_metadata?: TextLocales
}
