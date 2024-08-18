<template>
	<div class="flex flex-col gap-3 font-inter">
		<div class="flex flex-row gap-4 items-center font-bold">
			<p class="text-base">DEPARTING FLIGHT</p>
			<p class="text-2xl">Mon, 18 Jan</p>
		</div>

		<div class="flex flex-row items-center gap-8 bg-white py-5 px-7 rounded-lg">
			<img :src="FLIGHT_ICON_SVG" alt="flight icon" />

			<FlightDetails />

			<div class="flex flex-col items-center gap-2">
				<img :src="FLIGHT1_SVG" alt="flight during time icon" />

				<p class="text-xs font-normal text-gray-400">Travel Time: 1h 15min</p>
			</div>

			<FlightDetails />
		</div>
	</div>
</template>

<script setup lang="ts">
import { FLIGHT_ICON_SVG, FLIGHT1_SVG } from "~/constants"
</script>
