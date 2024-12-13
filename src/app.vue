<template>
	<NuxtLayout>
		<div :dir="localeProperties.dir" class="w-full overflow-hidden">
			<NuxtPage />
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
// Locale
const { localeProperties } = useI18n()

// Stores
const tripPackagesStore = useTripPackagesStore()
const attractionsStore = useAttractionsStore()
const airportsStore = useAirportsStore()
const countriesStore = useCountriesStore()
const languagesStore = useLanguagesStore()
const homePageStore = useHomePageStore()
const whyUsPageStore = useWhyUsPageStore()
const termsOfUsePageStore = useTermsOfUsePageStore()
const privacyPolicyPageStore = usePrivacyPolicyPageStore()
const blogPageStore = useBlogPageStore()
const blogStore = useBlogStore()
const attractionsCategoriesStore = useAttractionsCategoriesStore()
const socialMediasStore = useSocialMediasStore()
const localesStore = useLocalesStore()

onMounted(async () => {
	await Promise.all([
		tripPackagesStore.loadTripPackages(),
		attractionsStore.loadAttractions(),
		airportsStore.loadAirports(),
		countriesStore.loadCountries(),
		languagesStore.loadLanguages(),
		homePageStore.loadHome(),
		whyUsPageStore.loadWhyUs(),
		termsOfUsePageStore.loadTermsOfUse(),
		privacyPolicyPageStore.loadPrivacyPolicy(),
		blogPageStore.loadBlog(),
		blogStore.loadPosts(),
		attractionsCategoriesStore.loadCategories(),
		socialMediasStore.loadSocialMedias(),
		localesStore.loadTranslations(),
	])
})
</script>
