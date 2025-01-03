import type { TextLocales } from "./locales"

export type RelativePathComponent = {
	label: TextLocales | string
	path?: string
	active?: boolean
}
