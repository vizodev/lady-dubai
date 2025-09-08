export default defineNuxtPlugin(({}) => {
	const { $i18n } = useNuxtApp()

	const availableLocales = $i18n.locales.map((l) => l.code)
	if (!availableLocales.includes($i18n.locale)) {
		$i18n.setLocale($i18n.defaultLocale)
	}
})
