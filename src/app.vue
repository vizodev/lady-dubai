<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup lang="ts">
const tripPackagesStore = useTripPackagesStore()
const attractionsStore = useAttractionsStore()

onMounted(async () => {
	await Promise.all([
		tripPackagesStore.loadTripPackages(),
		attractionsStore.loadAttractions(),
	])
})
</script>
