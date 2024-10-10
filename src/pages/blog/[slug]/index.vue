<template>
	<Header with-logo />

	<img
		:src="currentPost?.banner"
		alt="Post Banner"
		class="object-cover w-full h-[50vh] sm:(h-[79vh])"
	/>

	<div v-if="currentPost" class="page-padding pt-[47px] mb-16">
		<RelativePath :relativePath="relativePath" class="mb-8" />

		<div class="mb-16">
			<p class="mb-3 font-roboto-serif font-bold text-5xl sm:text-7xl">
				{{ currentPost.title[locale] }}
			</p>

			<p class="font-inter text-lg text-gray-500 w-full lg:(w-3/5)">
				{{ currentPost.description[locale] }}
			</p>
		</div>

		<div v-html="currentPost?.text_html[locale]" class="html-paragraph"></div>
	</div>

	<Contact />

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import { BLOG_ROUTE, HOME_ROUTE } from "~/constants"
import type { BlogPost, RelativePathComponent } from "~/models"

// General
const blogStore = useBlogStore()
const props = computed(() => {
	const params = useRoute().params

	return {
		slug: params.slug as string,
	}
})

// Relative path
const relativePath = computed(
	() =>
		[
			{
				label: "company_name",
				path: HOME_ROUTE,
			},
			{
				label: "blog",
				path: BLOG_ROUTE,
			},
			{
				label: currentPost.value?.title,
			},
		] as RelativePathComponent[]
)

// Post
const { posts } = storeToRefs(blogStore)
const currentPost = ref<BlogPost>()

const loadPost = async () => {
	currentPost.value =
		posts.value.find((i) => i.slug === props.value.slug) ??
		(await blogStore.getPostBySlug(props.value.slug))

	if (!currentPost.value) return openHome()
}

// Locales
const localePath = useLocalePath()
const { locale } = useI18n()

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))

// Life Cycle
onMounted(() => {
	loadPost()
})
</script>
