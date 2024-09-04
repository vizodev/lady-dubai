import { LanguageEnum } from "~/models"
import { languageAr } from "./ar"
import { languageDe } from "./de"
import { languageEn } from "./en"
import { languageEs } from "./es"
import { languageFr } from "./fr"
import { languageHe } from "./he"
import { languagePtBr } from "./pt-br"
import { languageRu } from "./ru"
import { languageToLocale } from "~/data"

export default {
	legacy: false,
	messages: {
		[languageToLocale[LanguageEnum.ENGLISH]]: languageEn,
		[languageToLocale[LanguageEnum.ARABIC]]: languageAr,
		[languageToLocale[LanguageEnum.SPANISH]]: languageEs,
		[languageToLocale[LanguageEnum.FRENCH]]: languageFr,
		[languageToLocale[LanguageEnum.HEBREW]]: languageHe,
		[languageToLocale[LanguageEnum.RUSSIAN]]: languageRu,
		[languageToLocale[LanguageEnum.GERMAN]]: languageDe,
		[languageToLocale[LanguageEnum.PORTUGUESE_BR]]: languagePtBr,
	},
}
