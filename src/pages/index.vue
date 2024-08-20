<template>
	<Header />
	<Hero />

	<div class="dynamic-section" v-if="!loadingTripPackages">
		<TripPackages />
		<CtaSection />
		<Contact />
	</div>

	<Footer />

	<WhatsappButton />
</template>

<script lang="ts" setup>
// General
const tripPackagesStore = useTripPackagesStore()
const { loadingTripPackages } = storeToRefs(tripPackagesStore)
</script>

<style scoped>
.customShadow {
	box-shadow: 0px 0px 2px rgba(118, 32, 78, 0.15),
		0px 4px 32px rgba(119, 51, 67, 0.05);
}
</style>
