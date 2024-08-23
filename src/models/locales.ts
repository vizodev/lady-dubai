export interface ILocaleMessages {}

export type TextType = {
	[key: string]: string
	en: string
	ar: string
	es: string
	fr: string
	he: string
	ru: string
	de: string
	"pt-br": string
}

export type TextListType = {
	[key: string]: string[]
	en: string[]
	ar: string[]
	es: string[]
	fr: string[]
	he: string[]
	ru: string[]
	de: string[]
	"pt-br": string[]
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
