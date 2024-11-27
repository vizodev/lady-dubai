<template>
	<div class="z-50">
		<a
			v-for="media of socialMedias.socialMedias"
			:href="media.link"
			target="_blank"
			class="cursor-pointer"
		>
			<img :src="media.icon" class="cursor-pointer" />
		</a>
	</div>
</template>

<script setup lang="ts">
const socialMedias = useSocialMediasStore()
</script>
