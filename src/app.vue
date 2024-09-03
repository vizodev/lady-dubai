<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const tripPackagesStore = useTripPackagesStore()
const attractionsStore = useAttractionsStore()
const airportsStore = useAirportsStore()
const countriesStore = useCountriesStore()
const languagesStore = useLanguagesStore()

onMounted(async () => {
	await Promise.all([
		tripPackagesStore.loadTripPackages(),
		attractionsStore.loadAttractions(),
		airportsStore.loadAirports(),
		countriesStore.loadCountries(),
		languagesStore.loadLanguages(),
	])
})
</script>
