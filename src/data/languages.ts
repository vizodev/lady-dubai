import {
	BRASIL_FLAG_SVG,
	FRENCH_FLAG_SVG,
	GERMAN_FLAG_SVG,
	ISRAEL_FLAG_SVG,
	JORDAN_FLAG_SVG,
	RUSSIAN_FLAG_SVG,
	SPANISH_FLAG_SVG,
	USA_FLAG_SVG,
} from "../constants"
import { LanguageEnum } from "../models"

export const languageToLocale = {
	[LanguageEnum.ARABIC]: "ar",
	[LanguageEnum.ENGLISH]: "en",
	[LanguageEnum.FRENCH]: "fr",
	[LanguageEnum.GERMAN]: "de",
	[LanguageEnum.HEBREW]: "he",
	[LanguageEnum.PORTUGUESE_BR]: "pt-br",
	[LanguageEnum.RUSSIAN]: "ru",
	[LanguageEnum.SPANISH]: "es",
}

export const localeToLanguage = {
	[languageToLocale[LanguageEnum.ARABIC]]: LanguageEnum.ARABIC,
	[languageToLocale[LanguageEnum.ENGLISH]]: LanguageEnum.ENGLISH,
	[languageToLocale[LanguageEnum.FRENCH]]: LanguageEnum.FRENCH,
	[languageToLocale[LanguageEnum.GERMAN]]: LanguageEnum.GERMAN,
	[languageToLocale[LanguageEnum.HEBREW]]: LanguageEnum.HEBREW,
	[languageToLocale[LanguageEnum.PORTUGUESE_BR]]: LanguageEnum.PORTUGUESE_BR,
	[languageToLocale[LanguageEnum.RUSSIAN]]: LanguageEnum.RUSSIAN,
	[languageToLocale[LanguageEnum.SPANISH]]: LanguageEnum.SPANISH,
}

export const languageToFlagSrc = {
	[LanguageEnum.ARABIC]: JORDAN_FLAG_SVG,
	[LanguageEnum.ENGLISH]: USA_FLAG_SVG,
	[LanguageEnum.FRENCH]: FRENCH_FLAG_SVG,
	[LanguageEnum.GERMAN]: GERMAN_FLAG_SVG,
	[LanguageEnum.HEBREW]: ISRAEL_FLAG_SVG,
	[LanguageEnum.PORTUGUESE_BR]: BRASIL_FLAG_SVG,
	[LanguageEnum.RUSSIAN]: RUSSIAN_FLAG_SVG,
	[LanguageEnum.SPANISH]: SPANISH_FLAG_SVG,
}
