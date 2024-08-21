<template>
	<div class="flex flex-col gap-3 font-inter">
		<div class="flex flex-row gap-4 items-center font-bold">
			<p class="text-base">
				{{ departingFlight ? "DEPARTING" : "RETURNING" }} FLIGHT
			</p>
			<p class="text-2xl">{{ dateLabel() }}</p>
		</div>

		<div class="flex flex-row items-center gap-8 bg-white py-5 px-7 rounded-lg">
			<img :src="FLIGHT_ICON_SVG" alt="flight icon" />

			<FlightDetails :date="takeoff" :airport-id="takeoffAirportId" />

			<div class="flex flex-col items-center gap-2">
				<img :src="FLIGHT1_SVG" alt="flight during time icon" />

				<p class="text-xs font-normal text-gray-400">
					Travel Time: {{ flightDurationLabel() }}
				</p>
			</div>

			<FlightDetails
				:date="landing"
				:airport-id="landingAirportId"
				:days-from-takeoff="daysFromTakeoff()"
			/>
		</div>
	</div>
</template>

<script setup lang="ts">
import { FLIGHT_ICON_SVG, FLIGHT1_SVG } from "~/constants"

// General
const { takeoff, landing } = defineProps<{
	departingFlight?: boolean
	takeoff: Date
	takeoffAirportId: number
	landing: Date
	landingAirportId: number
}>()

const daysFromTakeoff = () => {
	const takeoffDate = new Date(takeoff)
	const landingDate = new Date(landing)

	const isSameDay =
		takeoffDate.getFullYear() === landingDate.getFullYear() &&
		takeoffDate.getMonth() === landingDate.getMonth() &&
		takeoffDate.getDate() === landingDate.getDate()

	if (isSameDay) return 0

	const differenceInDays = Math.floor(
		Math.abs(takeoffDate.getTime() - landingDate.getTime()) /
			(24 * 60 * 60 * 1000)
	)

	return differenceInDays + 1
}

// Labels
const flightDurationLabel = () => {
	const takeoffTime = new Date(takeoff).getTime()
	const landingTime = new Date(landing).getTime()

	const durationInMinutes = Math.floor(
		Math.abs(takeoffTime - landingTime) / (60 * 1000)
	)

	const hours = Math.floor(durationInMinutes / 60)
	const minutes = durationInMinutes % 60

	return `${hours}h ${minutes}min`
}
const dateLabel = () => {
	const date = new Date(takeoff)

	const month = date.toLocaleString("en-us", { month: "short" })
	const weekday = date.toLocaleString("en-us", { weekday: "short" })

	return `${weekday}, ${date.getDate()} ${month}`
}
</script>
