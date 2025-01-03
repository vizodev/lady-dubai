import { tripPackageCurrencies } from "../data"
import type { NumberLocales, TextLocales } from "./"

export type TripPackage = {
	id: number
	created_at: Date
	slug: string
	order?: Partial<NumberLocales>
	title_metadata?: TextLocales
	description_metadata?: TextLocales
	title: TextLocales
	subtitle: TextLocales
	headline: TextLocales
	description: TextLocales
	downsale_price: Price
	price: Price
	gallery: string[]
	services: PackageService[]
	guidelanguages: Language[]
	flights: Flight[]
	is_relocation: boolean
	is_visible: boolean
	is_custom: boolean
	visibility_languages: string[]
	accommodations: Accommodation[]
}

export type Price = {
	[key in Currency]: number
}

export type Currency = keyof typeof tripPackageCurrencies

export type Accommodation = {
	id: number

	images: string[]
	title: TextLocales
	subtitle: TextLocales
	description: TextLocales
	features: TextLocales[]
}

export type AccommodationFeature = {
	id: number

	title: TextLocales
}

export type Flight = {
	id: number

	price: Price

	departing_duration?: number
	departing_takeoff: Date
	departing_takeoff_airport_id: number
	departing_landing: Date
	departing_landing_airport_id: number

	returning_duration?: number
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

	label: TextLocales
	icon: string
}
