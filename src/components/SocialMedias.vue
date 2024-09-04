<template>
	<div>
		<button class="">
			<img :src="FACEBOOK_ICON_SVG" alt="" />
		</button>
		<button class="">
			<img :src="YOUTUBE_ICON2_SVG" alt="" />
		</button>
		<button class="">
			<img :src="TIKTOK_ICON_SVG" alt="" />
		</button>
		<button class="">
			<img :src="INSTAGRAM_ICON_SVG" alt="" />
		</button>
	</div>
</template>

<script setup lang="ts">
import {
	FACEBOOK_ICON_SVG,
	YOUTUBE_ICON2_SVG,
	TIKTOK_ICON_SVG,
	INSTAGRAM_ICON_SVG,
} from "~/constants"
</script>
