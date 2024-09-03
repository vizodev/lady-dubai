<template>
	<Header with-logo class="z-50" />

	<iframe
		:src="currentAttraction?.video_url"
		frameborder="0"
		class="w-full h-[90vh]"
	></iframe>

	<div class="relative">
		<Flower :src="FLOWER_LEFT2_SVG" class="-top-15 left-0" />

		<div
			v-if="currentAttraction"
			class="page-padding pt-[47px] relative z-10 mb-16 z-10"
		>
			<RelativePath :relativePath="relativePath" class="mb-8" />

			<div>
				<div class="font-roboto-serif mb-16">
					<p class="font-roboto-serif text-7xl font-bold">
						{{ currentAttraction.title[locale] }}
					</p>
					<p
						v-if="locale !== languageToLocale[LanguageEnum.ARABIC]"
						class="text-4xl font-light mt-2"
					>
						{{ currentAttraction.title.ar }}
					</p>
				</div>

				<div class="mb-36">
					<div
						v-html="currentAttraction?.long_description_html[locale]"
						class="mb-24 font-inter w-full lg:w-4/5"
					></div>

					<div>
						<p class="mb-6 text-base font-bold">
							{{ t("attraction.includedInTravelPackages") }}
						</p>

						<div class="flex flex-wrap gap-3">
							<button
								v-for="tripPackage of tripPackagesByAttraction"
								@click="openTripPackage(tripPackage.id)"
								class="btn-primary"
							>
								{{ tripPackage.title[locale] }} >
							</button>
						</div>
					</div>
				</div>

				<div
					v-html="currentAttraction?.first_text_html[locale]"
					class="mb-20 font-inter w-full lg:w-4/5"
				></div>

				<WhatsappBox
					data-aos="fade-right"
					data-aos-offset="-300"
					data-aos-duration="800"
				/>
			</div>
		</div>

		<TripPackageGallery
			:gallery="currentAttraction?.gallery ?? []"
			class="mb-24 lg:mb-40"
		/>

		<div class="flex flex-col gap-20 mb-20 page-padding">
			<div
				v-html="currentAttraction?.second_text_html[locale]"
				class="font-inter w-full lg:w-4/5"
			></div>
		</div>

		<iframe
			:src="currentAttraction?.map_src"
			style="border: 0"
			loading="lazy"
			allowfullscreen
			referrerpolicy="no-referrer-when-downgrade"
			class="w-full"
		></iframe>

		<Contact class="page-padding" />
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script lang="ts" setup>
import {
	type Attraction,
	type RelativePathComponent,
	type TripPackage,
	LanguageEnum,
} from "~/models"
import { FLOWER_LEFT2_SVG, HOME_ROUTE, TRIP_PACKAGE_ROUTE } from "~/constants"
import { languageToLocale } from "~/data"
import {
	languageAr,
	languageDe,
	languageEn,
	languageEs,
	languageFr,
	languageHe,
	languagePtBr,
	languageRu,
} from "~/locales"

// General
const tripPackagesStore = useTripPackagesStore()
const attractionStore = useAttractionsStore()
const { attractions } = storeToRefs(attractionStore)

// Relative path
const relativePath = computed(
	() =>
		[
			{
				label: {
					en: languageEn.companyName,
					ar: languageAr.companyName,
					de: languageDe.companyName,
					es: languageEs.companyName,
					ru: languageRu.companyName,
					fr: languageFr.companyName,
					ptBr: languagePtBr.companyName,
					he: languageHe.companyName,
				},
				path: "/",
			},
			{
				label: {
					en: languageEn.attractions,
					ar: languageAr.attractions,
					de: languageDe.attractions,
					es: languageEs.attractions,
					ru: languageRu.attractions,
					fr: languageFr.attractions,
					ptBr: languagePtBr.attractions,
					he: languageHe.attractions,
				},
				path: "/",
			},
			{
				label: currentAttraction.value?.title,
			},
		] as RelativePathComponent[]
)

// Attraction
const currentAttraction = ref<Attraction>()
const attractionId = computed(() => {
	return Number(useRoute().params.id)
})

const loadAttraction = async () => {
	currentAttraction.value =
		attractions.value.find(
			(attraction) => attraction.id === attractionId.value
		) ?? (await attractionStore.getAttractionById(attractionId.value))

	if (!currentAttraction.value) openHome()
}

// Trip Packages by attractions
const tripPackagesByAttraction = ref<TripPackage[]>()

const loadTripPackagesByAttraction = async () => {
	tripPackagesByAttraction.value =
		await tripPackagesStore.getTripPackagesByAttractionId(attractionId.value)
}

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const openTripPackage = (id: number) => {
	navigateTo(localePath(TRIP_PACKAGE_ROUTE(id)))
}
const openHome = () => navigateTo(localePath(HOME_ROUTE))

// Life cycle
onMounted(() => {
	loadTripPackagesByAttraction()
	loadAttraction()
})
</script>
