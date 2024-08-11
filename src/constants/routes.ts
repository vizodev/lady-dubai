export const HOME_ROUTE = "/"

export const ATTRACTION_ROUTE = (id: string) => `/attraction/${id}`

export const TRIP_PACKAGE_ROUTE = (id: string) => `/trip_package/${id}`
export const TRIP_PACKAGE_CHECKOUT_ROUTE = (id: string, date: number) =>
	`/${TRIP_PACKAGE_ROUTE(id)}/checkout?date=${date}`
