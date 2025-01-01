<template>
	<div class="flex flex-col gap-3 font-inter">
		<div class="flex flex-row gap-4 items-center font-bold">
			<p class="text-base">
				{{ departingFlight ? "DEPARTING" : "RETURNING" }} FLIGHT
			</p>

			<p class="text-2xl flex gap-5">
				{{ dateLabel(takeoff) }}
				<i
					class="fi fi-ss-plane-alt flex items-center justify-center text-gray-600"
					:class="{ flip: isRtl() }"
				></i>
				{{ dateLabel(landing) }}
			</p>
		</div>

		<div class="flex flex-row items-center gap-8 bg-white py-5 px-7 rounded-lg">
			<img :src="FLIGHT_ICON_SVG" alt="flight icon" />

			<FlightDetails :date="takeoff" :airport-id="takeoffAirportId" />

			<div class="flex flex-col items-center gap-2">
				<img
					:src="FLIGHT1_SVG"
					alt="flight during time icon"
					:class="{ flip: isRtl() }"
				/>

				<p class="text-xs font-normal text-gray-400">
					Travel Time: {{ flightDurationLabel() }}
				</p>
			</div>

			<FlightDetails :date="landing" :airport-id="landingAirportId" />
		</div>
	</div>
</template>

<script setup lang="ts">
import { FLIGHT1_SVG, FLIGHT_ICON_SVG } from "~/constants";

// Locales
const { locale } = useI18n()

// General
const { takeoff, landing, duration } = defineProps<{
	departingFlight?: boolean
	takeoff: Date
	takeoffAirportId: number
	landing: Date
	landingAirportId: number
	duration?: number
}>()

// Labels
const flightDurationLabel = () => {
	const hours = duration ? Math.floor(duration / 60) : 0
	const minutes = duration ? duration % 60 : 0

	return `${hours}h ${minutes}min`
}
const dateLabel = (date: Date) => {
	const month = date.toLocaleString(locale.value, { month: "short" })
	const weekday = date.toLocaleString(locale.value, { weekday: "short" })

	return `${weekday}, ${date.getDate()} ${month}`
}
</script>

<style scoped>
.flip {
	-webkit-transform: scaleX(-1);
	transform: scaleX(-1);
}
</style>
