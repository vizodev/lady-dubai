<template>
	<button
		@click="changeLocale"
		class="flex items-center gap-3 duration-[.2s] text-brown-700 hover:(text-blue-500)"
	>
		<img :src="languageToFlagSrc[language]" class="w-[27px] h-[16px] rounded-sm"></img>
		<span class="uppercase font-inter font-medium text-xs">{{ language }}</span>
	</button>
</template>

<script lang="ts" setup>
import { LanguageEnum } from "~/models"
import { languageToLocale, languageToFlagSrc } from "~/data"

const { language } = defineProps<{
	language: LanguageEnum
}>()

// Locales
const { setLocale } = useI18n()

const changeLocale = () => {
	setLocale(languageToLocale[language])
}
</script>
