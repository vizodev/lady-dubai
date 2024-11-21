import type { Currency, TripPackage } from "~/models"

export const getTripPackagePrice = (
	tripPackage: TripPackage,
	travellersCount: number,
	currency: Currency
) => {
	return tripPackage.price[currency] * travellersCount
}
