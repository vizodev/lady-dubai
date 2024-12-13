<template>
	<div class="flex flex-col font-inter text-xl font-light">
		<p class="font-bold">
			{{
				departingFlight
					? t("checkout_flight_departure")
					: t("checkout_flight_return")
			}}
		</p>

		<p>
			{{ takeOffAirport?.title[locale] }} {{ t("checkout_flight_to") }}
			{{ landingAirport?.title[locale] }}
		</p>

		<p>{{ timeLabel() }}</p>
	</div>
</template>

<script setup lang="ts">
// General
const props = defineProps<{
	takeOffAirportId: number
	landingAirportId: number
	takeOffDate: Date
	departingFlight?: boolean
}>()

const airportsStore = useAirportsStore()
const { airports } = storeToRefs(airportsStore)

// Airport
const takeOffAirport = computed(() => {
	return airports.value.find((i) => i.id === props.takeOffAirportId)
})
const landingAirport = computed(() => {
	return airports.value.find((i) => i.id === props.landingAirportId)
})

// Labels
const timeLabel = () => {
	const date = new Date(props.takeOffDate)

	const month = date.toLocaleString("en-us", { month: "short" })

	return `${date.getHours()}:${date.getMinutes()}, ${date.getDate()} ${month} ${date.getFullYear()}`
}

// Locales
const { locale, t } = useI18n()
</script>
