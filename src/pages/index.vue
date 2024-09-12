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
const homeStore = useHomeStore()
const tripPackagesStore = useTripPackagesStore()

// Trip Packages
const { loadingTripPackages } = storeToRefs(tripPackagesStore)
const { homeData } = storeToRefs(homeStore)

// Locales
const { locale } = useI18n()

// Watchers
watch(
	() => homeData.value,
	(value) => {
		if (!value) return

		useHead({
			title: value.title[locale.value],
			meta: [
				{
					name: value.metadata.name[locale.value],
					content: value.metadata.content[locale.value],
				},
			],
		})
	},
	{
		immediate: true,
	}
)
</script>

<style scoped>
.customShadow {
	box-shadow: 0px 0px 2px rgba(118, 32, 78, 0.15),
		0px 4px 32px rgba(119, 51, 67, 0.05);
}
</style>
