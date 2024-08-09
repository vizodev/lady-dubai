<template>
	<div class="flex flex-col overflow-y-auto w-full">
		<iframe
			:src="currentAttraction?.videoUrl"
			frameborder="0"
			class="w-full h-[90vh]"
		></iframe>

		<div
			v-if="currentAttraction"
			class="w-full px-6 md:px-16 lg:px-6 xl:px-[100px] 2xl:px-[200px] 3xl:px-[245px] pt-[47px] relative z-10 pb-4 md:pb-8 lg:pb-16"
		>
			<RelativePath :relativePath="relativePath" class="mb-8" />

			<div>
				<p class="font-roboto-serif text-7xl font-bold mb-16">
					{{ currentAttraction.title }}
					<p class="text-4xl font-light mt-2">{{ currentAttraction.arabicTitle }}</p>
				</p>

				<div class="mb-36">
					<div v-html="currentAttraction?.longDescription" class="html mb-24"></div>

					<div >
						<p class="mb-6 text-base font-bold">
							INCLUDED IN OUR TRAVEL PACKAGES:
						</p>

						<div class="flex flex-wrap gap-3">
							<button
								v-for="buttonLabel of [
									'The Dubai Experience',
									'Relocation',
									'Fun Lady',
								]"
								class="flex items-center text-white bg-pink-500 rounded-xl px-5 xl:px-6 py-2.5 xl:py-3 font-inter font-bold sm:text-[18px] lg:text-[20px] 2xl:text-[24px] textShadow tracking-[0.02] gap-4"
							>
								{{ buttonLabel }} >
							</button>
						</div>
					</div>
				</div>

				<div v-html="currentAttraction?.firstText" class="html mb-20"></div>

				<WhatsappBox
					data-aos="fade-right"
					data-aos-offset="-300"
					data-aos-duration="800"
				/>
			</div>
		</div>

		<TripPackageGallery
			:gallery="currentAttraction?.gallery ?? []"
			class="mb-40"
		/>

		<div
			class="flex flex-col gap-20 mb-20 w-full px-6 md:px-16 lg:px-6 xl:px-[100px] 2xl:px-[200px] 3xl:px-[245px]"
		>
			<div v-html="currentAttraction?.secondText" class="html"></div>
		</div>

		<iframe
			:src="currentAttraction?.mapSrc"
			style="border: 0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			class="w-full"
		></iframe>

		<ContactV2
			class="w-full px-6 md:px-16 lg:px-6 xl:px-[100px] 2xl:px-[200px] 3xl:px-[245px]"
		/>
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script lang="ts" setup>
import type { Attraction, RelativePathComponent } from "~/models"

// General
const attractionStore = useAttractionsStore()
const { loadingAttractions, errorOnLoadAttractions, attractions } =
	storeToRefs(attractionStore)

// Relative path
const relativePath = computed(
	() =>
		[
			{
				label: {
					en: "Lady Dubai",
					he: "ליידי דובאי",
				},
				path: "/",
			},
			{
				label: {
					en: "Attractions",
					he: "אטרקציות",
				},
				path: "/",
			},
			{
				label: {
					en: currentAttraction.value?.title ?? "",
					he: currentAttraction.value?.title ?? "",
				},
			},
		] as RelativePathComponent[]
)

// Attraction
const currentAttraction = ref<Attraction>()
const attractionId = computed(() => {
	return useRoute().params.id
})

const loadAttraction = async () => {
	const attraction = attractions.value.find(
		(attraction) => attraction.id === attractionId.value
	)

	if (attraction) {
		currentAttraction.value = attraction
	} else {
		currentAttraction.value = await attractionStore.loadAttractionById()
	}
}

// Life cycle
onMounted(() => loadAttraction())
</script>

<style scoped>
.html {
	font-family: Inter, sans-serif;
	width: 80%;
}
</style>
