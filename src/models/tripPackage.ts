import {
	PLANE_ICON_SVG,
	ACCOMMODATION_ICON_SVG,
	ATTRACTION_ICON_SVG,
	MEALS_ICON_SVG,
	TRANSPORTATION_ICON_SVG,
	LAUNDRY_ICON_SVG,
	TOWEL_ICON_SVG,
} from "~/constants"

export type TripPackage = {
	id: string
	created_at: Date
	title: string
	subtitle: string
	headline: string
	description: string
	downsale_price: {
		usd: number
		ils: number
		aed: number
	}
	price: {
		usd: number
		ils: number
		aed: number
	}
	gallery: string[]
	services: SingleService[]
	guidelanguages: Language[]
	nextavailabledates: AvailableDate[]
	cancelationPolicy: {
		label: {
			en: string[]
			he: string[]
		}
	}
	disclaimer: {
		label: {
			en: string[]
			he: string[]
		}
	}
}

export type Attraction = {
	id: string
	banner: string
	videoUrl: string
	title: string
	arabicTitle: string
	subtitle: string
	description: string
	longDescription: string
	asideImg: string
	gallery: string[]
	link: string
	mapSrc: string
	firstText: string
	secondText: string
}

export type AvailableDate = {
	from: Date
	to: Date
}

export type Language = {
	id: number
	created_at: Date
	acronym: {
		en: string
		he: string
	}
	label: {
		en: string
		he: string
	}
	name: string
	is_system_language: boolean
}

export type SingleService = {
	id: number
	created_at: Date
	label: {
		en: string
		he: string
	}
	icon: string
}

export enum GuideLanguages {
	ENGLISH = "ENGLISH",
	ARABIC = "ARABIC",
	FRENCH = "FRENCH",
	SPANISH = "SPANISH",
	RUSSIAN = "RUSSIAN",
	GERMAN = "GERMAN",
}

export enum PackagesServices {
	FLIGHT_TICKETS = "FLIGHT_TICKETS",
	ACCOMMODATION = "ACCOMMODATION",
	ATTRACTION_TICKETS = "ATTRACTION_TICKETS",
	MEALS = "MEALS",
	TRANSFER = "TRANSFER",
	LAUNDRY = "LAUNDRY",
	TOWELS = "TOWELS",
}
