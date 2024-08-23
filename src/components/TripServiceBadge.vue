<template>
	<div class="flex items-center gap-1.5">
		<img :src="tripService.icon" alt="" class="w-6" />
		<span class="font-medium font-inter leading-tight">
			{{ tripService.label[locale] }}
		</span>
	</div>
</template>

<script lang="ts" setup>
import { type PackageService } from "~/models"

defineProps<{
	tripService: PackageService
}>()

// Locales
const { locale } = useI18n()
</script>
