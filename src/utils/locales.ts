export const isRtl = () => {
	const { localeProperties } = useI18n()

	return localeProperties.value.dir === "rtl"
}
