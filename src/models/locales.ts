export type Translation = {
	[key: string]: any

	locale_acronym: string
	is_ready_to_use: boolean
}

export type TextType = {
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

export type TextListType = {
	[key: string]: string[]
	en: string[]
	ar: string[]
	es: string[]
	fr: string[]
	he: string[]
	ru: string[]
	deu: string[]
	pt: string[]
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
