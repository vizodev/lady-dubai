<template>
	<div
		class="flex flex-col w-full md:min-w-[528px] lg:max-w-[528px] bg-white shadow-md pt-8 pb-[52px] px-4 sm:px-6 rounded-[16px] lg:-mt-[calc(47px+35px)] items-center gap-[52px]"
	>
		<div class="flex flex-col gap-8 items-center w-full">
			<div class="flex flex-col gap-6 items-center">
				<div class="flex flex-col items-center gap-1">
					<span
						class="text-[#749BFF] font-bold text-[20px] leading-tight font-inter"
					>
						Limited Time Promotional Price
					</span>
					<div class="relative w-fit">
						<span
							class="text-brown-700 font-semibold font-roboto-serif text-[20px] sm:text-[24px]"
						>
							{{ `$ ${tripPackage?.downsale_price?.usd}` }}
						</span>
						<div
							class="w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 z-[1] top-[50%] translate-y-[-50%]"
						></div>
					</div>
					<div
						class="flex items-center gap-1 bg-blue-200 text-white rounded-[10px] px-1.5 py-1"
					>
						<i class="fi fi-br-clock-three flex"></i>
						<span class="text-sm font-bold font-inter"> 7 Days, 23H, 13m </span>
					</div>
				</div>
				<div class="flex items-center gap-3">
					<span
						class="text-pink-500 font-bold font-roboto-serif text-[28px] sm:text-[32px] md:text-[36px] xl:text-[48px] whitespace-nowrap"
					>
						{{ `$ ${tripPackage?.price?.usd}` }}
					</span>
					<div class="flex flex-col font-inter">
						<span class="font-bold text-pink-600 leading-none"> DIRHAM </span>
						<span class="text-[14px] font-medium text-pink-500">
							per person
						</span>
					</div>
				</div>
			</div>
			<button
				@click="openCheckout"
				class="bg-pink-500 rounded-xl px-4 py-3 textShadow text-white font-bold text-[20px] sm:text-[24px] leading-tight w-full font-inter"
			>
				Get Package
			</button>
		</div>
		<div class="flex flex-col gap-3 items-start">
			<span class="uppercase font-bold font-inter leading-tight">
				next Available dates
			</span>

			<TripPackageAvailableDates
				:available-dates="tripPackage.nextavailabledates"
				:initial-value="props.tripPackage.nextavailabledates[0]"
				@on-change="onAvailableDateChange"
			/>
		</div>
		<div class="flex flex-col gap-6 items-start w-full">
			<div class="flex flex-col">
				<span
					class="uppercase text-[12px] leading-tight text-[#272223] font-bold font-inter"
				>
					Cancelation policy:
				</span>
				<ul class="m-0 pl-4 w-full list-disc">
					<li v-for="text in tripPackage.cancelationPolicy.label.en" class="">
						<span class="font-inter font-medium text-[12px] leading-tight">
							{{ text }}
						</span>
					</li>
				</ul>
			</div>
			<div class="flex flex-col">
				<span
					class="uppercase text-[12px] leading-tight text-[#272223] font-bold font-inter"
				>
					Discalimer:
				</span>
				<ul class="m-0 pl-4 w-full list-disc">
					<li v-for="text in tripPackage.disclaimer.label.en" class="">
						<span class="font-inter font-medium text-[12px] leading-tight">
							{{ text }}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { AvailableDate, TripPackage2 } from "~/models"

const props = defineProps<{
	tripPackage: TripPackage2
}>()

// Date
const selectedAvailableDate = ref<AvailableDate>(
	props.tripPackage.nextavailabledates[0]
)

const onAvailableDateChange = (data: AvailableDate) => {
	selectedAvailableDate.value = data
}

// Routes
const openCheckout = () => {
	navigateTo({
		path: `/trip-package/${props.tripPackage.id}/checkout`,
		query: {
			date: props.tripPackage.nextavailabledates.indexOf(
				selectedAvailableDate.value
			),
		},
	})
}
</script>

<style scoped>
.textShadow {
	text-shadow: 0 1px 2px rgba(48, 6, 16, 0.25), 0 0 6px rgba(43, 6, 52, 0.15);
}
</style>
