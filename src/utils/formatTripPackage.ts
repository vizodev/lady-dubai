import type { AccommodationFeature, TripPackage } from "~/models"

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
		cancelationPolicy: data.cancelationpolicy[0],
		disclaimer: data.disclaimer[0],
		flights: (data.flights as any[])
			.map((i: any) => ({
				...i,
				departing_takeoff: new Date(i.departing_takeoff),
				departing_landing: new Date(i.departing_landing),

				returning_takeoff: new Date(i.returning_takeoff),
				returning_landing: new Date(i.returning_landing),
			}))
			.sort(
				(i1, i2) =>
					i1.departing_takeoff.getTime() - i2.departing_takeoff.getTime()
			),
	}
}
