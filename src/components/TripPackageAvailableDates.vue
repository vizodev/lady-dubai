<template>
	<div class="flex items-center gap-3 flex-wrap w-full">
		<button
			v-for="dt in flights"
			class="btn-rounded"
			:class="{
				'bg-pink-600 text-white hover:(bg-pink-700)': selectedFlight === dt,
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

const { initialValue } = defineProps<{
	flights: Flight[]
	initialValue?: Flight
}>()

const emit = defineEmits<{
	(e: "onChange", data: Flight): void
}>()

// Dates
const selectedFlight = ref<Flight>()

const onChange = (data: Flight) => {
	selectedFlight.value = data

	emit("onChange", data)
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

// Life cycle
onMounted(() => {
	if (initialValue) onChange(initialValue)
})
</script>
