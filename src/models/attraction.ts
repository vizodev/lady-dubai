import type { TextType } from "./"

export type Attraction = {
	id: number
	slug: string
	title_metadata?: TextType
	description_metadata?: TextType
	banner: string
	video_url?: string
	title: TextType
	description: TextType
	gallery: string[]
	map_src: string
	long_description_html: TextType
	first_text_html: TextType
	second_text_html: TextType
}
