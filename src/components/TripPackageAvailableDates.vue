<template>
	<div class="flex items-center gap-3 flex-wrap w-full">
		<button
			v-for="dt in availableDates"
			class="border border-pink-600 px-3 py-2 text-pink-600 font-bold text-[14px] leading-tight font-inter rounded-xl"
			:class="{
				'bg-pink-600 text-white': selectedAvailableDate === dt,
			}"
			@click="() => onChange(dt)"
		>
			{{ handleAvailableDateLabel(dt) }}
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
	const toYear = to.getFullYear()
	const fromMonthYear = `${fromMonth} ${fromYear}`

	if (fromMonth === toMonth) {
		return `${fromDay} - ${toDay} ${fromMonthYear}`
	} else {
		return `${fromDay} ${fromMonth} - ${toDay} ${toMonth} ${toYear}`
	}
}

// Life cycle
onMounted(() => {
	if (initialValue) onChange(initialValue)
})
</script>
