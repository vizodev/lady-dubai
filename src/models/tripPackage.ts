import type { TextListType, TextType } from "./"

export type TripPackage = {
	id: number
	created_at: Date
	slug: string
	title_metadata?: TextType
	description_metadata?: TextType
	title: TextType
	subtitle: TextType
	headline: TextType
	description: TextType
	downsale_price: Price
	price: Price
	payment_price_id: string
	gallery: string[]
	services: PackageService[]
	guidelanguages: Language[]
	flights: Flight[]
	accommodations: Accommodation[]
	cancelationPolicy: {
		label: TextListType
	}
	disclaimer: {
		label: TextListType
	}
}

export type Accommodation = {
	id: number

	images: string[]
	title: TextType
	subtitle: TextType
	description: TextType
	features: TextType[]
}

export type Price = {
	usd: number
	ils: number
	aed: number
}

export type Flight = {
	id: number

	departing_takeoff: Date
	departing_takeoff_airport_id: number
	departing_landing: Date
	departing_landing_airport_id: number

	returning_takeoff: Date
	returning_takeoff_airport_id: number
	returning_landing: Date
	returning_landing_airport_id: number
}

export type Language = {
	id: number

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

export type PackageService = {
	id: number

	label: TextType
	icon: string
}
