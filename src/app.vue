<template>
	<NuxtLayout>
		<div class="w-full overflow-hidden">
			<NuxtPage />
		</div>
	</NuxtLayout>
</template>

<script setup lang="ts">
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
	])
})
</script>
