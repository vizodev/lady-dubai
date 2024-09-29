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
const homeStore = useHomeStore()
const whyUsStore = useWhyUsStore()

onMounted(async () => {
	await Promise.all([
		tripPackagesStore.loadTripPackages(),
		attractionsStore.loadAttractions(),
		airportsStore.loadAirports(),
		countriesStore.loadCountries(),
		languagesStore.loadLanguages(),
		homeStore.loadHome(),
		whyUsStore.loadWhyUs(),
	])
})
</script>
