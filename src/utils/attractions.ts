import type { Attraction } from "~/models"

export const filterAttractionsToShow = (
	attractions: Attraction[],
	locale: string
) => {
	return attractions.filter((i) => i.visibility_languages.includes(locale))
}
