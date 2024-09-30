<template>
	<div class="flex gap-3 flex-wrap bg-[#f5f8fa] rounded p-1">
		<button
			class="flex gap-3 items-center"
			v-for="(path, index) in relativePath"
			:class="{
				'text-pink-600': index < relativePath.length - 1,
				'text-[#272223]': index === relativePath.length - 1,
			}"
			:disabled="index === relativePath.length - 1"
			@click="path.path?.length ? openPath(path.path) : null"
		>
			<span
				class="text-[12px] leading-tight font-medium font-inter uppercase hover:underline"
			>
				{{
					typeof path.label === "string" ? t(path.label) : path.label[locale]
				}}
			</span>

			<div
				class="flex items-center justify-center h-full"
				v-if="index < relativePath.length - 1"
			>
				<i class="fi fi-sr-angle-right text-[12px]"></i>
			</div>
		</button>
	</div>
</template>

<script lang="ts" setup>
import { type RelativePathComponent } from "~/models"

defineProps<{
	relativePath: RelativePathComponent[]
}>()

// Locales
const { t, locale } = useI18n()
const localePath = useLocalePath()

// Routes
const openPath = (path: string) => navigateTo(localePath(path))
</script>
