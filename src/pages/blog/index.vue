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
			class="flex flex-col gap-4 pl-[12%] 2xl:pl-[12.96875%] pt-28 md:pt-40 text-white z-50"
		>
			<span
				class="text-[40px] sm:text-[60px] xl:text-[80px] !leading-[1.09] -tracking-[0.02] font-bold font-roboto-serif z-50"
			>
				{{ t("blog_title1") }}
				<span class="font-normal">{{ t("blog_title2") }}</span>
			</span>

			<div class="font-inter text-xl md:(text-2xl) z-50">
				<span>{{ t("blog_description1") }}</span>
				<br />
				<span class="font-bold">{{ t("blog_description2") }}</span>
			</div>
		</div>

		<SocialMedias
			class="flex flex-col absolute bottom-5 gap-5 md:(gap-[28px] bottom-[65px]) right-[40px] xl:right-[76px]"
		/>
	</div>

	<div class="mb-34 page-padding relative">
		<SidePageIcon
			:id="ARTICLES_SECTION"
			:src="FLOWER_LEFT4_SVG"
			class="-top-55 left-0"
		/>

		<div class="flex flex-col items-center gap-20">
			<div
				class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6"
			>
				<Loading v-if="blogStore.loadingPost" />
				<BlogPost
					v-else
					v-for="(post, idx) of currentArticles"
					:post="post"
					:idx="idx"
				/>
			</div>

			<div v-if="articlesPagesCount > 1" class="flex">
				<i
					@click="previousPage"
					class="fi fi-rs-angle-left cursor-not-allowed"
					:class="{
						'hover:(text-pink-500) !cursor-pointer': currentArticlePageIdx > 0,
					}"
				></i>

				<div class="flex gap-6 mx-16">
					<p
						v-for="(_, idx) of Array.from(Array(articlesPagesCount).keys())"
						@click="specificPage(idx)"
						class="text-sm font-inter cursor-pointer hover:(underline)"
						:class="{
							'text-pink-500 font-bold': currentArticlePageIdx === idx,
						}"
					>
						{{ idx + 1 }}
					</p>
				</div>

				<i
					@click="nextPage"
					class="fi fi-rs-angle-right cursor-not-allowed"
					:class="{
						'hover:(text-pink-500) !cursor-pointer':
							currentArticlePageIdx + 1 != articlesPagesCount,
					}"
				></i>
			</div>
		</div>
	</div>

	<Contact />

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import {
	ARTICLES_LIMIT_PER_PAGE,
	ARTICLES_SECTION,
	BLOG_BANNER_IMAGE,
	FLOWER_LEFT4_SVG,
} from "~/constants"
import type { BlogPost } from "~/models"

// General
const blogStore = useBlogStore()
const blogPageStore = useBlogPageStore()

// Blog Articles
const currentArticles = ref<BlogPost[]>([])
const currentArticlePageIdx = ref(0)
const articlesPagesCount = computed(() => {
	const res = blogStore.posts.length / ARTICLES_LIMIT_PER_PAGE

	return res < 0 ? 0 : Math.ceil(res)
})

const getCurrentArticles = async () => {
	const posts = await blogStore.getPostsByPage(currentArticlePageIdx.value)

	currentArticles.value = posts

	// Scroll to articles section
	document.getElementById(ARTICLES_SECTION)?.scrollIntoView()
}
const specificPage = (idx: number) => {
	if (idx === currentArticlePageIdx.value) return

	currentArticlePageIdx.value = idx
	getCurrentArticles()
}
const nextPage = () => {
	currentArticlePageIdx.value++

	getCurrentArticles()
}
const previousPage = () => {
	currentArticlePageIdx.value--

	getCurrentArticles()
}

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

// Life cycle
onMounted(() => {
	getCurrentArticles()
})
</script>
