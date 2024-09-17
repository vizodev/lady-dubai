<template>
	<iframe v-if="isYoutubeVideoUrl" :src="src" frameborder="0"></iframe>
	<video v-else controls autoplay class="bg-off-black">
		<source :src="src" />
	</video>
</template>

<script setup lang="ts">
const { src } = defineProps<{
	src?: string
}>()

const isYoutubeVideoUrl = isYoutubeUrl(src)
</script>
