import { TRIP_PACKAGES_SECTION } from "./constants"

export const HOME_ROUTE = "/"
export const HOME_TRIP_PACKAGES_SECTION_ROUTE = `${HOME_ROUTE}#${TRIP_PACKAGES_SECTION}`

export const WHY_US_ROUTE = "/why-us"
export const PRIVACY_POLICY_ROUTE = "/privacy-policy"
export const TERMS_OF_USE_ROUTE = "/terms-of-use"

export const BLOG_ROUTE = "/blog"
export const BLOG_ARTICLE_ROUTE = (slug: string) => `${BLOG_ROUTE}/${slug}`

export const ATTRACTION_ROUTE = (slug: string) => `/attraction/${slug}`

export const TRIP_PACKAGE_ROUTE = (slug: string) => `/trip-package/${slug}`
export const TRIP_PACKAGE_CHECKOUT_ROUTE = (slug: string, date?: number) =>
	`${TRIP_PACKAGE_ROUTE(slug)}/checkout${
		date != undefined ? `?date=${date}` : ""
	}`
