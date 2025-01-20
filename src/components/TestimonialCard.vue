<template>
	<div
		:key="data.id"
		class="flex flex-col gap-8 bg-white rounded-lg shadow px-6 py-9 mt-10 min-w-full md:(min-w-64) lg:(min-w-80) xl:(min-w-96)"
	>
		<div class="flex justify-between relative w-full">
			<img
				:src="data.photo"
				:alt="`${data.name} photo`"
				class="w-[75px] h-[75px] absolute bottom-5"
			/>
			<div></div>
			<div class="flex gap-1">
				<i
					v-for="(_, idx) of [...Array(5).keys()]"
					:key="idx"
					class="fi fi-ss-star text-pink-500"
				></i>
			</div>
		</div>

		<p class="font-inter font-medium text-sm">
			{{ data.text[locale] }}
		</p>

		<div class="flex gap-4">
			<img :src="LIKE_SVG" alt="like icon" />

			<div class="flex flex-col gap-1 font-inter">
				<p class="font-extrabold text-sm">{{ data.name }}</p>
				<p class="text-[10px]">{{ t("testimonials_customer") }}</p>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { LIKE_SVG } from "~/constants"
import type { Testimonial } from "~/models"

defineProps<{
	data: Testimonial
}>()

// Locales
const { t, locale } = useI18n()
</script>
