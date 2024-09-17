<template>
	<Header with-logo class="z-50" />

	<VideoRender v-if="videoUrl" :src="videoUrl" class="w-full h-[79vh]" />
	<img
		v-else
		:src="currentAttraction?.banner"
		alt="Attraction Banner"
		class="w-full h-[79vh]"
	/>

	<div class="relative">
		<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-15 left-0" />

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
						class="html-paragraph mb-24"
					></div>

					<div v-if="tripPackagesByAttraction?.length > 0">
						<p class="mb-6 text-base font-bold">
							{{ t("attraction.includedInTravelPackages") }}
						</p>

						<div class="flex flex-wrap gap-3">
							<button
								v-for="tripPackage of tripPackagesByAttraction"
								@click="openTripPackage(tripPackage.slug)"
								class="btn-primary"
							>
								{{ tripPackage.title[locale] }} >
							</button>
						</div>
					</div>
				</div>

				<div
					v-html="currentAttraction?.first_text_html[locale]"
					class="mb-20 html-paragraph"
				></div>

				<WhatsappBox
					data-aos="fade-right"
					data-aos-offset="-300"
					data-aos-duration="800"
				/>
			</div>
		</div>

		<Gallery
			:gallery="currentAttraction?.gallery ?? []"
			class="mb-24 lg:mb-40"
		/>

		<div class="flex flex-col gap-20 mb-20 page-padding">
			<div
				v-html="currentAttraction?.second_text_html[locale]"
				class="html-paragraph"
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
import { FLOWER_LEFT4_SVG, HOME_ROUTE, TRIP_PACKAGE_ROUTE } from "~/constants"
import { languageToLocale } from "~/data"
import {
	languageAr,
	languageDe,
	languageEn,
	languageEs,
	languageFr,
	languageHe,
	languagePt,
	languageRu,
} from "~/locales"
import {
	type Attraction,
	type RelativePathComponent,
	type TripPackage,
	LanguageEnum,
} from "~/models"

// General
const props = computed(() => {
	const params = useRoute().params

	return {
		slug: params.slug as string,
	}
})

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
					ptBr: languagePt.companyName,
					he: languageHe.companyName,
				},
				path: HOME_ROUTE,
			},
			{
				label: {
					en: languageEn.attractions,
					ar: languageAr.attractions,
					de: languageDe.attractions,
					es: languageEs.attractions,
					ru: languageRu.attractions,
					fr: languageFr.attractions,
					ptBr: languagePt.attractions,
					he: languageHe.attractions,
				},
				path: HOME_ROUTE,
			},
			{
				label: currentAttraction.value?.title,
			},
		] as RelativePathComponent[]
)

// Attraction
const currentAttraction = ref<Attraction>()
const videoUrl = computed(() => {
	const url = currentAttraction.value?.video_url

	if (!url || url.length === 0) return

	return isYoutubeUrl(url) ? getYoutubeVideoUrl(url) : url
})

const loadAttraction = async () => {
	currentAttraction.value =
		attractions.value.find((i) => i.slug === props.value.slug) ??
		(await attractionStore.getAttractionBySlug(props.value.slug))

	if (!currentAttraction.value) return openHome()
}

// Trip Packages by attractions
const tripPackagesByAttraction = ref<TripPackage[]>([])

const loadTripPackagesByAttraction = async (id: number) => {
	tripPackagesByAttraction.value =
		await tripPackagesStore.getTripPackagesByAttractionId(id)
}

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const openTripPackage = (slug: string) => {
	navigateTo(localePath(TRIP_PACKAGE_ROUTE(slug)))
}
const openHome = () => navigateTo(localePath(HOME_ROUTE))

// Watchers
watch(
	() => currentAttraction.value,
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
	}
)

// Life cycle
onMounted(async () => {
	await loadAttraction()

	if (!currentAttraction.value) {
		openHome()
		return
	}

	loadTripPackagesByAttraction(currentAttraction.value.id)
})
</script>
