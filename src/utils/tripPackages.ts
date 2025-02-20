import type { AccommodationFeature, Currency, TripPackage } from "~/models"

export const filterTripPackagesToShow = (
	packages: TripPackage[],
	locale: string
) => {
	return packages
		.filter(
			(i) =>
				i.is_visible && !i.is_custom && i.visibility_languages.includes(locale)
		)
		.sort((a, b) => {
			const orderA = a.order?.en ?? null
			const orderB = b.order?.en ?? null

			if (orderA === null || orderA === 0) return 1
			if (orderB === null || orderB === 0) return -1

			return orderA - orderB
		})
}

export const canShowPackage = (data: TripPackage) => {
	return data.is_visible
}

export const getTripPackagePrice = (
	tripPackage: TripPackage,
	travellersCount: number,
	currency: Currency,
	noFlight = false
) => {
	const discount = noFlight
		? tripPackage.discount_flight_price
			? tripPackage.discount_flight_price[currency] * travellersCount
			: 0
		: 0

	return {
		price: tripPackage.price[currency] * travellersCount - discount,
		downsalePrice:
			tripPackage.downsale_price[currency] * travellersCount - discount,
	}
}

export const formatTripPackage = (
	data: any,
	accommodationsFeatures: AccommodationFeature[]
): TripPackage => {
	;(data.accommodations as any[]).forEach((i, idx) => {
		data.accommodations[idx].features = accommodationsFeatures
			.filter((e) => data.accommodations[idx].features.includes(e.id))
			.map((i) => i.title)
	})

	return {
		...data,
		visibility_languages: data.visibility_languages ?? [],
		flights: (data.flights as any[])
			.map((i: any) => ({
				...i,
				departing_takeoff: createDateIgnoringTimezone(i.departing_takeoff),
				departing_landing: createDateIgnoringTimezone(i.departing_landing),

				returning_takeoff: createDateIgnoringTimezone(i.returning_takeoff),
				returning_landing: createDateIgnoringTimezone(i.returning_landing),
			}))
			.sort(
				(i1, i2) =>
					i1.departing_takeoff.getTime() - i2.departing_takeoff.getTime()
			),
	}
}
