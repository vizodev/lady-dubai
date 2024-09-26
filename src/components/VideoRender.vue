<template>
	<ScriptYouTubePlayer
		v-if="isYoutubeVideoUrl && youtubeVideoData"
		trigger="immediate"
		:video-id="youtubeVideoData.id"
		:player-vars="youtubeVideoData.vars"
		@ready="onReady"
		@state-change="onStateChange"
		:width="youtubeWidth"
		:height="youtubeHeight"
	/>
	<video v-else autoplay muted class="bg-off-black">
		<source :src="src" />
	</video>
</template>

<script setup lang="ts">
import { getYoutubeVideoUrlData } from "~/utils/getYoutubeVideoUrlData"

const { src } = defineProps<{
	src?: string
}>()

// General
const isYoutubeVideoUrl = isYoutubeUrl(src)

// Youtube Video
const youtubeHeight = ref(0)
const youtubeWidth = ref(0)
const youtubeVideoData =
	isYoutubeVideoUrl && src ? getYoutubeVideoUrlData(src) : null

const calculateYoutubePlayerHeight = () => {
	const { height, width } = window.screen

	const factor = height < 640 ? 0.5 : 0.7

	youtubeWidth.value = width
	youtubeHeight.value = height * factor
}
const onReady = (e: YT.PlayerEvent) => {
	e.target.playVideo()
}
const onStateChange = (e: YT.OnStateChangeEvent) => {
	if (!youtubeVideoData) return

	if (e.data === YT.PlayerState.ENDED) {
		e.target.loadVideoById({
			videoId: youtubeVideoData.id,
			startSeconds: youtubeVideoData.vars.start,
			endSeconds: youtubeVideoData.vars.end,
		})
	}
}

//  Listners
const resizeEventName = "resize"

const handleResize = () => {
	calculateYoutubePlayerHeight()
}

// Life Cycle
onMounted(() => {
	calculateYoutubePlayerHeight()

	window.addEventListener(resizeEventName, handleResize)
})

onUnmounted(() => {
	window.removeEventListener(resizeEventName, handleResize)
})
</script>
