import type { TextLocales } from "./"

export type Attraction = {
	id: number
	attraction_category_id: number
	slug: string
	title_metadata?: TextLocales
	description_metadata?: TextLocales
	banner: string
	video_url?: string
	title: TextLocales
	description: TextLocales
	gallery: string[]
	map_src: string
	long_description_html: TextLocales
	first_text_html: TextLocales
	second_text_html: TextLocales
	is_relocation: boolean
	visibility_languages: string[]
}

export type AttractionCategory = {
	id: number
	title: TextLocales
}
