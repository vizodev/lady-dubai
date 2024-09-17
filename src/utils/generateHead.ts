import type { TextType } from "~/models"

export const generateHead = (
	locale: string,
	title: TextType,
	titleMetadata?: TextType,
	descriptionMetadata?: TextType
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
