import { LanguageAr } from "./ar"
import { LanguageDe } from "./de"
import { LanguageEn } from "./en"
import { LanguageEs } from "./es"
import { LanguageFr } from "./fr"
import { LanguageHe } from "./he"
import { LanguagePtBr } from "./pt-br"
import { LanguageRu } from "./ru"

export default {
	legacy: false,
	messages: {
		en: LanguageEn,
		ar: LanguageAr,
		es: LanguageEs,
		fr: LanguageFr,
		he: LanguageHe,
		ru: LanguageRu,
		de: LanguageDe,
		"pt-br": LanguagePtBr,
	},
}
