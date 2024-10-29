<template>
	<div
		class="flex flex-col rounded-xl bg-white custom-shadow w-full"
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

		<div class="pt-4 px-6 pb-8 h-full flex flex-col justify-between">
			<div>
				<p class="text-2xl font-semibold font-roboto-serif">
					{{ post.title[locale] }}
				</p>

				<p
					class="text-off-black my-3 font-inter font-medium text-sm line-clamp-2"
				>
					{{ post.description[locale] }}
				</p>
			</div>

			<div class="flex justify-between">
				<div></div>
				<p
					@click="goBlogArticle(post.slug)"
					class="cursor-pointer uppercase text-pink-600 text-[12px] leading-tight font-semibold font-inter uppercase"
				>
					{{ t("read_more") }}
				</p>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { BLOG_ARTICLE_ROUTE } from "~/constants"
import type { BlogPost } from "~/models"

defineProps<{
	post: BlogPost
	idx: number
}>()

// Locales
const localePath = useLocalePath()
const { locale, t } = useI18n()

// Routes
const goBlogArticle = (slug: string) => {
	navigateTo(localePath(BLOG_ARTICLE_ROUTE(slug)))
}
</script>

<style scoped>
.custom-shadow {
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
