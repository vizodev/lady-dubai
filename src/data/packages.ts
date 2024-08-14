import {
	PLANE_ICON_SVG,
	ACCOMMODATION_ICON_SVG,
	ATTRACTION_ICON_SVG,
	MEALS_ICON_SVG,
	TRANSPORTATION_ICON_SVG,
	LAUNDRY_ICON_SVG,
	TOWEL_ICON_SVG,
} from "~/constants"
import { PackagesServices } from "~/models"

export const packagesServicesList: {
	value: PackagesServices
	icon: string
	label: {
		en: string
		he: string
	}
}[] = [
	{
		value: PackagesServices.FLIGHT_TICKETS,
		icon: PLANE_ICON_SVG,
		label: {
			en: "Plane tickets",
			he: "כרטיסי טיסה",
		},
	},
	{
		value: PackagesServices.ACCOMMODATION,
		icon: ACCOMMODATION_ICON_SVG,
		label: {
			en: "Accommodation",
			he: "אירוח",
		},
	},
	{
		value: PackagesServices.ATTRACTION_TICKETS,
		icon: ATTRACTION_ICON_SVG,
		label: {
			en: "Attractions",
			he: "אטרקציות",
		},
	},
	{
		value: PackagesServices.MEALS,
		icon: MEALS_ICON_SVG,
		label: {
			en: "All Meals",
			he: "כל הארוחות",
		},
	},
	{
		value: PackagesServices.TRANSFER,
		icon: TRANSPORTATION_ICON_SVG,
		label: {
			en: "Transportation to all venues and activities",
			he: "הסעות לכל האטרקציות והפעילויות",
		},
	},
	{
		value: PackagesServices.LAUNDRY,
		icon: LAUNDRY_ICON_SVG,
		label: {
			en: "Laudry services",
			he: "שירותי כביסה",
		},
	},
	{
		value: PackagesServices.TOWELS,
		icon: TOWEL_ICON_SVG,
		label: {
			en: "Towels and bed sheets",
			he: "מגבות ומצעים",
		},
	},
]
