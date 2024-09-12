<template>
	<div class="w-full flex flex-col">
		<div class="w-full h-[286px]">
			<img :src="data.banner" alt="" class="w-full h-full object-cover" />
		</div>
		<div class="flex flex-col py-6 px-4 sm:p-6 gap-3.5">
			<span class="text-[20px] font-medium leading-tight font-inter">
				{{ data.title[locale] }}
			</span>
			<div class="flex flex-col items-start gap-3.5">
				<span
					class="text-[14px] text-gray-600 leading-tight font-medium font-inter"
				>
					{{ data.description[locale] }}
				</span>
				<button
					@click="goToAttraction"
					class="uppercase text-pink-600 text-[12px] leading-tight font-semibold font-inter"
				>
					{{ t("attraction.learnMore") }}
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ATTRACTION_ROUTE } from "~/constants"
import type { Attraction } from "~/models"

const { data } = defineProps<{
	data: Attraction
}>()

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const goToAttraction = () => {
	navigateTo(localePath(ATTRACTION_ROUTE(data.slug)))
}
</script>
