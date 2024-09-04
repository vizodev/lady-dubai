<template>
	<div class="z-50">
		<button v-for="media of medias">
			<img :src="media.icon" class="cursor-pointer" />
		</button>
	</div>
</template>

<script setup lang="ts">
import {
	FACEBOOK_ICON_SVG,
	INSTAGRAM_ICON_SVG,
	TIKTOK_ICON_SVG,
	YOUTUBE_ICON2_SVG,
} from "~/constants"

const medias: { icon: string }[] = [
	{ icon: FACEBOOK_ICON_SVG },
	{ icon: YOUTUBE_ICON2_SVG },
	{ icon: TIKTOK_ICON_SVG },
	{ icon: INSTAGRAM_ICON_SVG },
]
</script>
