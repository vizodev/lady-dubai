import type { TextLocales } from "./locales"

export type Testimonial = {
	id: string
	created_at: Date
	photo: string
	name: string
	text: TextLocales
}
