<template>
	<div class="flex flex-col font-inter">
		<p class="text-2xl font-bold mb-3">
			{{ timeLabel() }}
		</p>

		<p class="text-base font-medium mb-1">
			{{ currentAirport?.title[locale] }}
		</p>
		<p class="text-xs font-normal">
			{{ currentAirport?.description[locale] }}
		</p>
	</div>
</template>

<script setup lang="ts">
// General
const props = defineProps<{
	airportId: number
	date: Date
}>()

const airportsStore = useAirportsStore()
const { airports } = storeToRefs(airportsStore)

// Airport
const currentAirport = computed(() => {
	return airports.value.find((i) => i.id === props.airportId)
})

// Labels
const timeLabel = () => {
	return `${props.date.getHours()}:${props.date
		.getMinutes()
		.toString()
		.padStart(2, "0")}`
}

// Locales
const { locale } = useI18n()
</script>
