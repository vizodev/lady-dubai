<template>
	<img
		:src="src"
		alt="Flower"
		class="absolute w-22 sm:w-28 md:w-34 xl:w-40 2xl:w-46"
	/>
</template>

<script setup lang="ts">
defineProps<{
	src: string
}>()
</script>
