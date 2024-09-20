<template>
	<div class="relative flex items-center justify-center w-full">
		<div
			@click="onScrollLeft"
			class="absolute w-9 h-9 flex items-center justify-center bg-white text-[#A81955] rounded-full left-5 md:(left-13)"
		>
			<i class="fi fi-sr-angle-left flex"></i>
		</div>

		<div
			ref="scroller"
			@wheel="onWheel"
			:scroll-left.camel="scrollLeft"
			class="flex items-center w-full overflow-x-scroll hide-scrollbar gap-2 snap-mandatory snap-x snap-always"
		>
			<div
				class="w-[589px] h-[589px] min-w-[589px] snap-center snap-always"
				v-for="img in gallery"
			>
				<img :src="img" alt="" class="w-full h-full object-cover" />
			</div>
		</div>

		<div
			@click="onScrollRight"
			class="absolute w-9 h-9 flex items-center justify-center bg-white text-[#A81955] rounded-full right-5 md:(right-13)"
		>
			<i class="fi fi-sr-angle-right flex"></i>
		</div>
	</div>
</template>

<script lang="ts" setup>
const { gallery } = defineProps<{
	gallery: string[]
}>()

// Scroll
const scroller = ref()
const scrollLeft = ref(0)
const maxScrollLeft = computed(
	() => scroller.value.scrollWidth - scroller.value.clientWidth
)
const scrollValue = computed(() => maxScrollLeft.value / gallery.length)

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
