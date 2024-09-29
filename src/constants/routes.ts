import { TRIP_PACKAGES_SECTION } from "./constants"

export const HOME_ROUTE = "/"
export const HOME_TRIP_PACKAGES_SECTION_ROUTE = `${HOME_ROUTE}#${TRIP_PACKAGES_SECTION}`

export const WHY_US_ROUTE = "/why-us"

export const ATTRACTION_ROUTE = (id: string | number) => `/attraction/${id}`

export const TRIP_PACKAGE_ROUTE = (slug: string) => `/trip-package/${slug}`
export const TRIP_PACKAGE_CHECKOUT_ROUTE = (slug: string, date: number) =>
	`${TRIP_PACKAGE_ROUTE(slug)}/checkout?date=${date}`
