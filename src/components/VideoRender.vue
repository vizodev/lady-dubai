<template>
	<!-- <iframe v-if="isYoutubeVideoUrl" :src="src" frameborder="0"></iframe> -->
	<ScriptYouTubePlayer
		v-if="isYoutubeVideoUrl && youtubeVideoData"
		trigger="immediate"
		:video-id="youtubeVideoData.id"
		:player-vars="youtubeVideoData.vars"
		@ready="onReady"
		@state-change="onStateChange"
		:width="5000"
	/>
	<video v-else controls autoplay class="bg-off-black">
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
const youtubeVideoData =
	isYoutubeVideoUrl && src ? getYoutubeVideoUrlData(src) : null

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
</script>
