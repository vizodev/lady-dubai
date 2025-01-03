import type { TextLocales } from "~/models"

export const generateHead = (
	locale: string,
	title: TextLocales,
	titleMetadata?: TextLocales,
	descriptionMetadata?: TextLocales
) => {
	return {
		title: title[locale],
		meta: [
			{
				name: "title",
				content: titleMetadata ? titleMetadata[locale] : false,
			},
			{
				name: "description",
				content: descriptionMetadata ? descriptionMetadata[locale] : false,
			},
		],
	}
}
