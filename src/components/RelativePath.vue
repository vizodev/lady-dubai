<template>
	<div class="flex gap-3 flex-wrap">
		<button
			class="flex gap-3 items-center"
			v-for="(path, index) in relativePath"
			:class="{
				'text-pink-600': index < relativePath.length - 1,
				'text-[#272223]': index === relativePath.length - 1,
			}"
			:disabled="index === relativePath.length - 1"
			@click="path.path?.length ? navigateTo(path.path) : null"
		>
			<span
				class="text-[12px] leading-tight font-medium font-inter uppercase hover:underline"
			>
				{{ path.label.en }}
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
</script>
