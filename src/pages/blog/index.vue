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
				Travel <span class="font-normal">Blog</span>
			</span>

			<div class="font-inter text-2xl z-50">
				<span>Everything you need to know about traveling to Dubai,</span>
				<br />
				<span class="font-bold"
					>including tips and info specific for women.</span
				>
			</div>
		</div>

		<SocialMedias
			class="flex flex-col absolute bottom-[65px] right-[40px] xl:right-[76px] gap-[28px]"
		/>
	</div>

	<div class="mb-34 page-padding relative">
		<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-55 left-0" />

		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
			<div
				v-for="(post, idx) of blogStore.posts"
				class="flex flex-col rounded-xl bg-white customShadow w-full"
				:class="{
					'sm:(col-span-2) lg:(row-span-2)': idx === 0,
				}"
			>
				<img
					:src="post.banner"
					:alt="`${post.title[locale]} banner`"
					class="rounded-t-xl object-cover flex-grow"
					:class="{
						'max-h-41': idx !== 0,
					}"
				/>

				<div class="pt-4 px-6 pb-8 flex flex-col justify-between">
					<div>
						<p class="text-2xl font-semibold font-roboto-serif">
							{{ post.title[locale] }}
						</p>

						<p class="my-3 font-inter font-medium text-sm line-clamp-2">
							{{ post.description[locale] }}
						</p>
					</div>

					<div class="flex justify-between">
						<div></div>
						<p
							@click="goBlogArticle(post.slug)"
							class="cursor-pointer uppercase text-pink-600 text-[12px] leading-tight font-semibold font-inter"
						>
							READ MORE
						</p>
					</div>
				</div>
			</div>
		</div>
	</div>

	<Contact />

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import {
	BLOG_ARTICLE_ROUTE,
	BLOG_BANNER_IMAGE,
	FLOWER_LEFT4_SVG,
} from "~/constants"

// General
const blogStore = useBlogStore()

// Locales
const localePath = useLocalePath()
const { locale } = useI18n()

// Routes
const goBlogArticle = (slug: string) => {
	navigateTo(localePath(BLOG_ARTICLE_ROUTE(slug)))
}
</script>

<style scoped>
.customShadow {
	box-shadow: 0 4px 32px rgb(119, 51, 67, 0.05),
		0 2px 2px rgba(118, 32, 78, 0.15);
}
.line-clamp-2 {
	overflow: hidden;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 2;
}
</style>
