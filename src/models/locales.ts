export interface ILocaleMessages {
	companyName: string
	dirham: string
	allPackages: string
	attractions: string
	nextAvailableDates: string
	header: {
		whyUs: string
		travelBlog: string
		attractions: string
		contactUs: string
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
		title3: string
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
	tripPackage: {
		whatsIncluded: string
		availableGuideLanguages: string
		mainIncludedAttractions: string
		flightTitle: string
		flightDescription1: string
		flightDescription2: string
		flightSelectedDate: string
		excludePlaneTicketButton: string
		checkOtherPackages: string
		edgeCardTitle: string
		edgeCardPerPerson: string
		edgeCardButton: string
		edgeCardCancelationPolicy: string
		edgeCardDisclaimer: string
		modalButton: string
		buildOwnPackageTitle: string
		buildOwnPackageGroups: string
		buildOwnPackageDescription: string
		buildOwnPackageButton: string
	}
	attraction: {
		learnMore: string
		includedInTravelPackages: string
	}
	checkout: {
		checkout: string
		support: string
		return: string
		traveller: string
		addTraveller: string
		alterDate: string
		total: string
		flightReturn: string
		flightDeparture: string
		privacyPolicyDescription1: string
		privacyPolicyDescription2: string
		privacyPolicyDescription3: string
		privacyPolicyDescription4: string
		purchaseButton: string
		travellerInfo: string
		contactInfo: string
		paymentMethodInfo: string
		cardDetailsInfo: string
		modalButton: string
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
