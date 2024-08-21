export type TripPackage = {
	id: number
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
	flights: Flight[]
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
	accommodations: Accommodation[]
}

export type Accommodation = {
	images: string[]
	title: string
	subtitle: string
	description: string
	features: string[]
}

export type Flight = {
	departing_takeoff: Date
	departing_takeoff_airport_id: number
	departing_landing: Date
	departing_landing_airport_id: number

	returning_takeoff: Date
	returning_takeoff_airport_id: number
	returning_landing: Date
	returning_landing_airport_id: number
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
