<template>
	<div class="flex items-center gap-3 flex-wrap w-full">
		<button
			v-for="dt in availableDates"
			class="btn-rounded"
			:class="{
				'bg-pink-600 text-white hover:(bg-pink-700)':
					selectedAvailableDate === dt,
			}"
			@click="() => onChange(dt)"
		>
			{{ handleAvailableDateLabel(dt) }}
			<span class="text-xs font-light">{{
				handleAvailableDateYearLabel(dt)
			}}</span>
		</button>
	</div>
</template>

<script setup lang="ts">
import { type AvailableDate } from "~/models"

const { initialValue } = defineProps<{
	availableDates: AvailableDate[]
	initialValue?: AvailableDate
}>()

const emit = defineEmits<{
	(e: "onChange", data: AvailableDate): void
}>()

// Dates
const selectedAvailableDate = ref<AvailableDate>()

const onChange = (data: AvailableDate) => {
	selectedAvailableDate.value = data
	emit("onChange", data)
}
const handleAvailableDateLabel = (date: { from: Date; to: Date }) => {
	// 18 - 24 Jan 2024 | Same month
	// 29 May - 3 June 2024 | Different month
	const from = new Date(date.from)
	const to = new Date(date.to)
	const fromMonth = from.toLocaleString("en-us", {
		month: "short",
	})
	const toMonth = to.toLocaleString("en-us", { month: "short" })
	const fromDay = from.getDate()
	const toDay = to.getDate()
	const fromYear = from.getFullYear()

	if (fromMonth === toMonth) {
		return `${fromDay} - ${toDay} ${toMonth}`
	} else {
		return `${fromDay} ${fromMonth} - ${toDay} ${toMonth}`
	}
}
const handleAvailableDateYearLabel = (date: { from: Date; to: Date }) => {
	const to = new Date(date.to)

	return to.getFullYear()
}

// Life cycle
onMounted(() => {
	if (initialValue) onChange(initialValue)
})
</script>
