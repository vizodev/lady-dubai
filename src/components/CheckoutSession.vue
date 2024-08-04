<template>
	<div class="bg-white w-full rounded-2xl p-8 shadow">
		<p class="text-2xl font-bold mb-12">{{ title }}</p>
	</div>
</template>

<script setup lang="ts">
defineProps<{
	title: string
}>()
</script>
