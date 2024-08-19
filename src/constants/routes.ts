export const HOME_ROUTE = "/"

export const ATTRACTION_ROUTE = (id: string | number) => `/attraction/${id}`

export const TRIP_PACKAGE_ROUTE = (id: string | number) => `/trip-package/${id}`
export const TRIP_PACKAGE_CHECKOUT_ROUTE = (
	id: string | number,
	date: number
) => `${TRIP_PACKAGE_ROUTE(id)}/checkout?date=${date}`
