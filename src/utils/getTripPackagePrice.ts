import type { Currency, Flight, TripPackage } from "~/models"

export const getTripPackagePrice = (
	tripPackage: TripPackage,
	flight: Flight | undefined,
	travellersCount: number,
	currency: Currency
) => {
	return (
		(tripPackage.price[currency] + (flight ? flight?.price[currency] : 0)) *
		travellersCount
	)
}
