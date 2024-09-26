import { languageToLocale } from "~/data"
import { LanguageEnum } from "~/models"
import {
	languageAr,
	languageDeu,
	languageEn,
	languageEs,
	languageFr,
	languageHe,
	languagePt,
	languageRu,
} from "./"

export default {
	legacy: false,
	messages: {
		[languageToLocale[LanguageEnum.ENGLISH]]: languageEn,
		[languageToLocale[LanguageEnum.ARABIC]]: languageAr,
		[languageToLocale[LanguageEnum.SPANISH]]: languageEs,
		[languageToLocale[LanguageEnum.FRENCH]]: languageFr,
		[languageToLocale[LanguageEnum.HEBREW]]: languageHe,
		[languageToLocale[LanguageEnum.RUSSIAN]]: languageRu,
		[languageToLocale[LanguageEnum.GERMAN]]: languageDeu,
		[languageToLocale[LanguageEnum.PORTUGUESE_BR]]: languagePt,
	},
}
