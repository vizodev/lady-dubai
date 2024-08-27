export interface ILocaleMessages {
	companyName: string
	header: {
		whyUs: string
		travelBlog: string
		attractions: string
	}
	footer: {
		customerService: string
		customerServiceDescription: string
		copyright: string
		privacyPolicy: string
		termsOfUse: string
	}
	hero: {
		title1: string
		title2: string
		description1: string
		description2: string
		button: string
		footer: string
	}
	cta: {
		title1: string
		title2: string
		title3: string
		description1: string
		description2: string
		testemonialButton: string
		testemonialDescription1: string
		testemonialDescription2: string
		testemonialDescription3: string
	}
	contact: {
		title: string
		interestedInPark: string
		button: string
	}
	whatsappBox: {
		title: string
		description: string
		button: string
	}
}

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
