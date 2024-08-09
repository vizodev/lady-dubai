<template>
	<Header />
	<Hero />

	<div class="dynamic-section" v-if="!loadingTripPackages">
		<TripPackages />
		<CtaSection />
		<ContactV2 />
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script lang="ts" setup>
const tripPackagesStore = useTripPackagesStore()
const { loadingTripPackages, errorOnLoadTripPackages } =
	storeToRefs(tripPackagesStore)

onMounted(async () => {
	await tripPackagesStore.loadTripPackages()
})
</script>

<style scoped>
.customShadow {
	box-shadow: 0px 0px 2px rgba(118, 32, 78, 0.15),
		0px 4px 32px rgba(119, 51, 67, 0.05);
}
</style>
