<template>
	<div v-if="showByAiports" class="flex flex-col gap-4 w-full">
		<div
			v-for="airport of airports.filter((i) =>
				flights.map((e) => e.departing_takeoff_airport_id).includes(i.id)
			)"
			class="flex flex-col gap-4 w-full"
		>
			<p class="text-normal font-inter self-start italic">
				{{ airport.title[locale] }}
			</p>

			<div class="flex items-center gap-3 flex-wrap">
				<button
					v-for="dt in flights.filter(
						(i) => i.departing_takeoff_airport_id === airport.id
					)"
					class="btn-rounded"
					:class="{
						'bg-pink-600 text-white hover:(bg-pink-700)': currentFlight === dt,
					}"
					@click="() => onChange(dt)"
				>
					{{ handleFlightLabel(dt) }}
					<span class="text-xs font-light">{{
						handleFlightYearLabel(dt)
					}}</span>
				</button>
			</div>
		</div>
	</div>

	<div v-else class="flex items-center gap-3 flex-wrap w-full">
		<button
			v-for="dt in flights"
			class="btn-rounded"
			:class="{
				'bg-pink-600 text-white hover:(bg-pink-700)': currentFlight === dt,
			}"
			@click="() => onChange(dt)"
		>
			{{ handleFlightLabel(dt) }}
			<span class="text-xs font-light">{{ handleFlightYearLabel(dt) }}</span>
		</button>
	</div>
</template>

<script setup lang="ts">
import { type Flight } from "~/models"

const { currentFlight } = defineProps<{
	flights: Flight[]
	currentFlight?: Flight
	showByAiports?: boolean
}>()

const emit = defineEmits<{
	(e: "onChange", data?: Flight): void
}>()

const airportsStore = useAirportsStore()

// Dates
const onChange = (data: Flight) => {
	emit("onChange", data !== currentFlight ? data : undefined)
}
const handleFlightLabel = (data: Flight) => {
	// 18 - 24 Jan 2024 | Same month
	// 29 May - 3 June 2024 | Different month
	const start = new Date(data.departing_takeoff)
	const end = new Date(data.returning_takeoff)

	const startMonth = start.toLocaleString("en-us", { month: "short" })
	const endMonth = end.toLocaleString("en-us", { month: "short" })

	const startDay = start.getDate()
	const endDay = end.getDate()

	if (startMonth === endMonth) {
		return `${startDay} - ${endDay} ${endMonth}`
	} else {
		return `${startDay} ${startMonth} - ${endDay} ${endMonth}`
	}
}
const handleFlightYearLabel = (data: Flight) => {
	const to = new Date(data.returning_landing)

	return to.getFullYear()
}

// Locales
const { locale } = useI18n()

// Airports
const { airports } = storeToRefs(airportsStore)
</script>
