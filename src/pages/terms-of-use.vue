<template>
	<Header with-logo class="z-50" />

	<img
		:src="termsOfUseData?.banner"
		alt="Terms of use Banner"
		class="object-cover w-full h-[50vh] sm:(h-[79vh])"
	/>

	<div class="relative">
		<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-15 left-0" />

		<div class="page-padding pt-[47px] relative z-10 mb-16 z-10">
			<RelativePath :relativePath="relativePath" class="mb-8" />

			<p class="font-roboto-serif font-bold text-5xl sm:text-7xl mb-16">
				{{ termsOfUseData?.title[locale] }}
			</p>

			<div
				v-html="termsOfUseData?.text_html[locale]"
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
import type { RelativePathComponent } from "~/models"

// General
const termsOfUsePageStore = useTermsOfUsePageStore()

// Page data
const { termsOfUseData } = storeToRefs(termsOfUsePageStore)

// Locales
const { locale } = useI18n()

// Relative path
const relativePath = computed(
	() =>
		[
			{
				label: "company_name",
				path: HOME_ROUTE,
			},
			{
				label: "footer_terms_of_use",
			},
		] as RelativePathComponent[]
)

// Watchers
watch(
	() => termsOfUseData.value,
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
