<template>
	<div
		class="flex flex-col bg-white rounded-xl overflow-hidden customShadow relative"
	>
		<div
			class="absolute bg-pink-100 z-10 w-[135px] py-2 flex justify-center -rotate-45 left-[-33px] top-[15px]"
			v-if="isNew"
		>
			<span
				class="text-[24px] text-white font-bold font-inter textShadow leading-none"
			>
				New
			</span>
		</div>
		<div class="relative w-full flex flex-col items-center justify-center">
			<div
				ref="bannerScrollList"
				class="w-full h-[164px] sm:h-[150px] md:h-[180px] lg:h-[249px] overflow-scroll hide-scrollbar snap-mandatory snap-x flex items-center"
				@scroll="calcCurrentBanner()"
			>
				<div
					class="h-full snap-center snap-always w-full bg-cover bg-center bg-no-repeat min-w-full"
					v-for="image in tripPackage.gallery"
					:style="`background-image: url(${image});`"
				></div>
			</div>
			<div class="absolute bottom-3.5 flex items-center gap-3">
				<button
					class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"
					v-for="(image, index) in tripPackage.gallery"
					:class="{
						'!bg-white': index === activeBanner,
						'!bg-gray-300': index !== activeBanner,
					}"
					@click="scrollToBanner(index)"
				></button>
			</div>
		</div>
		<div class="flex flex-col p-5 lg:p-8 gap-6 md:gap-4 lg:gap-6">
			<div class="flex flex-col gap-1 md:gap-0.5">
				<span
					class="text-brown-700 text-[28px] sm:text-[32px] md:text-[36px] font-roboto-serif font-medium !leading-tight"
				>
					{{ tripPackage.title }}
				</span>
				<span class="text-brown-700 text-[14px] font-inter font-medium">
					{{ tripPackage.headline }}
				</span>
			</div>
			<div class="flex flex-wrap gap-5 items-center">
				<span
					class="border border-pink-600 text-pink-600 text-[12px] font-medium font-inter px-1.5 py-1 rounded-md"
					v-for="language in tripPackage.guidelanguages"
				>
					{{ language.label.en }}
				</span>
			</div>
			<div class="flex flex-col gap-1">
				<span
					class="font-bold text-brown-700 text-xs leading-tight uppercase font-inter"
				>
					Included:
				</span>
				<div class="flex flex-wrap items-center gap-4">
					<div
						class="flex items-center justify-center"
						v-for="serv in tripPackage.services"
					>
						<img :src="serv.icon" alt="" class="w-6 h-6 object-cover" />
					</div>
				</div>
			</div>
			<div
				class="flex 2xl:items-end justify-between flex-col 2xl:flex-row gap-4 2xl:gap-0"
			>
				<div class="flex flex-col lg:gap-1.5">
					<div class="relative w-max">
						<span class="text-brown-700 font-semibold font-roboto-serif">
							{{ `$ ${tripPackage.downsale_price.usd}` }}
						</span>
						<div
							class="transform w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 top-[50%] translate-y-[-50%]"
						></div>
					</div>

					<div class="flex items-center gap-3 mb-1">
						<span
							class="text-blue-200 font-bold font-roboto-serif text-[28px] sm:text-[32px] md:text-[36px] whitespace-nowrap"
						>
							{{ `$ ${tripPackage.price.usd}` }}
						</span>
						<div class="flex flex-col font-inter">
							<span class="text-[12px] font-bold text-blue-200 leading-none">
								DIRHAM
							</span>
							<span class="text-[10px] font-medium text-blue-200">
								per person
							</span>
						</div>
					</div>

					<span
						class="text-white bg-blue-200 text-[10px] font-bold font-inter w-full rounded-md text-center px-1.5 py-2 uppercase mt-1.5 lg:mt-0"
					>
						Limited Time Promotional Price
					</span>
				</div>
				<button @click="openTripPackage" class="btn-primary">See More</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { TripPackage } from "~/models"
import { TRIP_PACKAGE_ROUTE } from "~/constants"

const props = defineProps<{
	tripPackage: TripPackage
}>()

const bannerScrollList = ref<HTMLElement | null>(null)
const activeBanner = ref(0)
const isNew = ref(false)

const scrollToBanner = (index: number) => {
	if (bannerScrollList.value) {
		bannerScrollList.value.scrollTo({
			left: index * bannerScrollList.value.clientWidth,
			behavior: "smooth",
		})
		activeBanner.value = index
	}
}

const autoScroll = () => {
	if (activeBanner.value < props.tripPackage.gallery.length - 1) {
		activeBanner.value++
	} else {
		activeBanner.value = 0
	}
	scrollToBanner(activeBanner.value)
}

const calcCurrentBanner = () => {
	if (bannerScrollList.value) {
		const scrollLeft = bannerScrollList.value.scrollLeft
		const bannerWidth = bannerScrollList.value.clientWidth
		activeBanner.value = Math.round(scrollLeft / bannerWidth)
	}
}

onMounted(() => {
	// setInterval(autoScroll, 5000);
	//verify is created less than 7 days
	checkIsNew()
})

const checkIsNew = () => {
	const createdDate = new Date(props.tripPackage.created_at)
	const currentDate = new Date()
	const diffTime = Math.abs(currentDate.getTime() - createdDate.getTime())
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
	if (diffDays <= 7) {
		isNew.value = true
	}
}

const openTripPackage = () => {
	navigateTo(TRIP_PACKAGE_ROUTE(props.tripPackage.id))
}
</script>

<style scoped>
.customShadow {
	box-shadow: 0 4px 32px rgb(119, 51, 67, 0.05),
		0 2px 2px rgba(118, 32, 78, 0.15);
}

.textShadow {
	text-shadow: 0 2px 0px rgba(0, 0, 0, 0.15);
}
</style>
