export default defineI18nLocale(async (locale) => {
	const localesStore = useLocalesStore()

	const translation = await localesStore.getTranslation(locale)

	return translation
})
