export type Translation = {
	[key: string]: any

	locale_acronym: string
	is_ready_to_use: boolean
}

export type TextLocales = {
	[key: string]: string
	en: string
	ar: string
	es: string
	fr: string
	he: string
	ru: string
	deu: string
	pt: string
}

export type NumberLocales = {
	[key: string]: number
	en: number
	ar: number
	es: number
	fr: number
	he: number
	ru: number
	deu: number
	pt: number
}

export enum LanguageEnum {
	ENGLISH = "ENGLISH",
	ARABIC = "عربي",
	FRENCH = "FRANÇAIS",
	SPANISH = "ESPAÑOL",
	RUSSIAN = "Русский",
	GERMAN = "DEUTSCH",
	HEBREW = "עברית",
	PORTUGUESE_BR = "PORTUGUÊS (BR)",
}
