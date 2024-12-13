<template>
	<button
		v-if="isLocaleReadyToUse"
		@click="changeLocale"
		class="flex items-center gap-3 duration-[.2s] hover:(text-blue-500)"
	>
		<img :src="languageToFlagSrc[language]" class="w-[27px] h-[16px] rounded-sm"></img>
		<span class="uppercase font-inter font-medium text-xs">{{ language }}</span>
	</button>
</template>

<script lang="ts" setup>
import { languageToCurrency, languageToFlagSrc, languageToLocale } from "~/data";
import { LanguageEnum, type Currency } from "~/models";

const { language } = defineProps<{
	language: LanguageEnum
}>()

const localesStore = useLocalesStore()
const currenciesStore = useCurrenciesStore()

// Locales
const {translations} = storeToRefs(localesStore)
const {  setLocale } = useI18n()

const isLocaleReadyToUse = computed(() => {
	return translations.value.find((i) => i.locale_acronym == languageToLocale[language])?.is_ready_to_use
})

const changeLocale = () => {
	setLocale(languageToLocale[language])
	currenciesStore.changeCurrentCurrency(languageToCurrency[language].acronym.toLowerCase() as Currency)
}
</script>
