<template>
	<span
		class="border border-[#272223] text-[#272223] font-medium font-inter px-1.5 py-1 rounded-md text-sm sm:text-base"
	>
		{{ language.label.en }}
	</span>
</template>

<script lang="ts" setup>
import { type Language } from "~/models"

defineProps<{
	language: Language
}>()
</script>
