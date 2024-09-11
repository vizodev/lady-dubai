<template>
	<button
		@click="changeLocale"
		class="flex items-center gap-3 duration-[.2s] hover:(text-blue-500)"
	>
		<img :src="languageToFlagSrc[language]" class="w-[27px] h-[16px] rounded-sm"></img>
		<span class="uppercase font-inter font-medium text-xs">{{ language }}</span>
	</button>
</template>

<script lang="ts" setup>
import { languageToFlagSrc, languageToLocale } from "~/data";
import { LanguageEnum } from "~/models";

const { language } = defineProps<{
	language: LanguageEnum
}>()

// Locales
const { setLocale } = useI18n()

const changeLocale = () => {
	setLocale(languageToLocale[language])
}
</script>
