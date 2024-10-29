<template>
	<Header with-logo />

	<div
		class="w-full h-[60vh] !bg-cover !bg-center !bg-no-repeat relative mb-30"
		:style="{
			background: `url(${BLOG_BANNER_IMAGE}) `,
		}"
	>
		<div
			class="absolute inset-0 w-full h-full bg-[#5E6567] mix-blend-hard-light"
		></div>

		<div
			class="flex flex-col gap-4 pl-[12%] 2xl:pl-[12.96875%] pt-40 text-white z-50"
		>
			<span
				class="text-[40px] sm:text-[60px] xl:text-[80px] !leading-[1.09] -tracking-[0.02] font-bold font-roboto-serif z-50"
			>
				{{ t("blog_title1") }}
				<span class="font-normal">{{ t("blog_title2") }}</span>
			</span>

			<div class="font-inter text-2xl z-50">
				<span>{{ t("blog_description1") }}</span>
				<br />
				<span class="font-bold">{{ t("blog_description2") }}</span>
			</div>
		</div>

		<SocialMedias
			class="flex flex-col absolute bottom-[65px] right-[40px] xl:right-[76px] gap-[28px]"
		/>
	</div>

	<div class="mb-34 page-padding relative">
		<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-55 left-0" />

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
			<BlogPost
				v-for="(post, idx) of blogStore.posts"
				:post="post"
				:idx="idx"
			/>
		</div>
	</div>

	<Contact />

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import { BLOG_BANNER_IMAGE, FLOWER_LEFT4_SVG } from "~/constants"

// General
const blogStore = useBlogStore()
const blogPageStore = useBlogPageStore()

// Blog Page
const { blogData } = storeToRefs(blogPageStore)

// Locales
const { t, locale } = useI18n()

// Watchers
watch(
	() => blogData.value,
	(value) => {
		if (!value) return

		useHead(
			generateHead(
				locale.value,
				value.title,
				value.title_metadata,
				value.description_metadata
			)
		)
	},
	{
		immediate: true,
	}
)
</script>
