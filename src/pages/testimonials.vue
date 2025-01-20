<template>
	<Header />

	<div
		class="w-full h-[60vh] !bg-cover !bg-center !bg-no-repeat relative mb-30 mix-blend-multiply"
		:style="{
			background: `url(${TESTIMONIALS_BANNER_IMAGE})`,
		}"
	>
		<div
			class="absolute inset-0 w-full h-full bg-[#5E6567] mix-blend-hard-light"
		></div>

		<div
			class="flex flex-col gap-4 pl-[12%] 2xl:pl-[12.96875%] pt-28 md:pt-40 text-white z-50"
		>
			<p
				class="text-[40px] sm:text-[60px] xl:text-[80px] !leading-[1.09] -tracking-[0.02] font-bold font-roboto-serif z-50"
			>
				{{ t("testimonials_title") }}
			</p>

			<div class="font-inter text-xl md:(text-2xl) z-50">
				{{ t("testimonials_description") }}
			</div>
		</div>

		<SocialMedias
			class="flex flex-col absolute bottom-5 gap-5 md:(gap-[28px] bottom-[65px]) right-[40px] xl:right-[76px]"
		/>
	</div>

	<div class="page-padding flex items-center gap-9">
		<i @click="onScrollLeft" class="fi fi-sr-angle-left text-pink-600"></i>

		<div
			ref="scroller"
			@wheel="onWheel"
			:scroll-left.camel="scrollLeft"
			class="p-5 pb-10 flex gap-9 p-1 overflow-x-scroll w-full rounded-6xl"
		>
			<TestimonialCard v-for="i of testimonials" :data="i" />
		</div>

		<i @click="onScrollRight" class="fi fi-sr-angle-right text-pink-600"></i>
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script setup lang="ts">
import { TESTIMONIALS_BANNER_IMAGE } from "~/constants"

// General
const testimonialsStore = useTestimonialsStore()

// Testimonials
const { testimonials } = storeToRefs(testimonialsStore)

// Locales
const { t } = useI18n()

// Scroll
const scroller = ref()
const scrollLeft = ref(0)
const maxScrollLeft = computed(
	() => scroller.value.scrollWidth - scroller.value.clientWidth
)
const scrollValue = computed(
	() => maxScrollLeft.value / testimonials.value.length
)

const onWheel = () => {
	scrollLeft.value = scroller.value.scrollLeft
}
const onScrollRight = () => {
	if (scrollLeft.value + scrollValue.value <= maxScrollLeft.value) {
		scrollLeft.value += scrollValue.value
	} else {
		scrollLeft.value = maxScrollLeft.value
	}
}
const onScrollLeft = () => {
	if (scrollLeft.value - scrollValue.value < 0) {
		scrollLeft.value = 0
	} else {
		scrollLeft.value -= scrollValue.value
	}
}

// Listeners
const resizeEventName = "resize"

const handleResize = () => {
	if (scrollLeft.value > maxScrollLeft.value) {
		scrollLeft.value = maxScrollLeft.value
	}
}

// Life cycle
onMounted(() => {
	window.addEventListener(resizeEventName, handleResize)
})

onUnmounted(() => {
	window.removeEventListener(resizeEventName, handleResize)
})
</script>
