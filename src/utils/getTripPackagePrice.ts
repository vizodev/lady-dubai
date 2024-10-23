import type { TripPackage } from "~/models"

export const getTripPackagePrice = (
	tripPackage: TripPackage,
	travellersCount: number
) => {
	return tripPackage.price.usd * travellersCount
}
