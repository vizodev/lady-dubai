<template>
	<img :src="src" alt="Flower" class="absolute w-22 sm:w-28 md:w-34" />
</template>

<script setup lang="ts">
defineProps<{
	src: string
}>()
</script>
