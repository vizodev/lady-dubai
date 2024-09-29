<template>
	<Header with-logo class="z-50" />

	<img
		:src="whyUsData?.banner"
		alt="Attraction Banner"
		class="object-cover w-full h-[50vh] sm:(h-[79vh])"
	/>

	<div class="relative">
		<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-15 left-0" />

		<div class="page-padding pt-[47px] relative z-10 mb-16 z-10">
			<RelativePath :relativePath="relativePath" class="mb-8" />

			<div
				v-html="whyUsData?.text_html[locale]"
				class="mb-20 html-paragraph"
			></div>
		</div>

		<Contact class="page-padding" />
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import { FLOWER_LEFT4_SVG, HOME_ROUTE } from "~/constants"
import {
	languageAr,
	languageDeu,
	languageEn,
	languageEs,
	languageFr,
	languageHe,
	languagePt,
	languageRu,
} from "~/locales"
import type { RelativePathComponent } from "~/models"

// General
const whyUsStore = useWhyUsStore()

// Page data
const { whyUsData } = storeToRefs(whyUsStore)

// Locales
const { locale } = useI18n()

// Relative path
const relativePath = computed(
	() =>
		[
			{
				label: {
					en: languageEn.companyName,
					ar: languageAr.companyName,
					deu: languageDeu.companyName,
					es: languageEs.companyName,
					ru: languageRu.companyName,
					fr: languageFr.companyName,
					pt: languagePt.companyName,
					he: languageHe.companyName,
				},
				path: HOME_ROUTE,
			},
			{
				label: {
					en: languageEn.header.whyUs,
					ar: languageAr.header.whyUs,
					deu: languageDeu.header.whyUs,
					es: languageEs.header.whyUs,
					ru: languageRu.header.whyUs,
					fr: languageFr.header.whyUs,
					pt: languagePt.header.whyUs,
					he: languageHe.header.whyUs,
				},
			},
		] as RelativePathComponent[]
)

// Watchers
watch(
	() => whyUsData.value,
	(value) => {
		if (!value) return

		useHead(
			generateHead(
				locale.value,
				value.title,
				value.title_metadata,
				value.description_metadata
			)
		)
	},
	{
		immediate: true,
	}
)
</script>
