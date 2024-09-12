import type { TextType } from "./locales"

export type Attraction = {
	id: number
	slug: string
	banner: string
	video_url: string
	title: TextType
	description: TextType
	aside_img: string
	gallery: string[]
	map_src: string
	long_description_html: TextType
	first_text_html: TextType
	second_text_html: TextType
}
