<template>
	<div
		class="flex flex-col w-full md:min-w-[528px] bg-white shadow-md pt-8 pb-[52px] px-4 sm:px-6 rounded-[16px] items-center gap-[52px] lg:(max-w-[528px] mt-[calc(-47px_+_-35px)])"
	>
		<div class="flex flex-col gap-8 items-center w-full">
			<div class="flex flex-col gap-6 items-center">
				<div
					v-if="
						tripPackage?.price[currentCurrency] !==
						tripPackage?.downsale_price[currentCurrency]
					"
					class="flex flex-col items-center gap-1"
				>
					<span
						class="text-[#749BFF] font-bold text-[20px] leading-tight font-inter"
					>
						{{ t("limited_time_promotional_price") }}
					</span>

					<div class="relative w-fit">
						<span
							class="text-brown-700 font-semibold font-roboto-serif text-[20px] sm:text-[24px]"
						>
							{{
								`${tripPackageCurrencies[currentCurrency].symbol} ${tripPackage?.downsale_price[currentCurrency]}`
							}}
						</span>
						<div
							class="transform w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 z-[1] top-[50%] translate-y-[-50%]"
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
						{{
							`${tripPackageCurrencies[currentCurrency].symbol} ${tripPackage?.price[currentCurrency]}`
						}}
					</span>
					<div class="flex flex-col font-inter">
						<span class="font-bold text-pink-600 leading-none">
							{{ t(`currency_${currentCurrency}`) }}
						</span>
						<span class="text-[14px] font-medium text-pink-500">
							{{ t("per_person") }}
						</span>
					</div>
				</div>
			</div>
			<button @click="openCheckout" class="btn-primary w-full">
				{{ t("trip_package_edge_card_button") }}
			</button>
		</div>
		<div class="flex flex-col gap-6 items-start self-start">
			<span class="uppercase font-bold font-inter leading-tight">
				{{ t("next_available_dates") }}
			</span>

			<TripPackageAvailableDates
				:flights="tripPackage.flights"
				:current-flight="currentFlight"
				show-by-aiports
				@on-change="onFlightChange"
			/>
		</div>
		<div class="flex flex-col gap-6 items-start w-full">
			<div class="flex flex-col">
				<span
					class="uppercase text-[12px] leading-tight text-[#272223] font-bold font-inter"
				>
					{{ t("trip_package_edge_card_cancelation_policy") }}
				</span>
				<ul class="m-0 pl-4 w-full list-disc">
					<li
						v-for="text in tripPackage.cancelationPolicy.label[locale]"
						class=""
					>
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
					{{ t("trip_package_edge_card_disclaimer") }}
				</span>
				<ul class="m-0 pl-4 w-full list-disc">
					<li v-for="text in tripPackage.disclaimer.label[locale]" class="">
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
import { TRIP_PACKAGE_CHECKOUT_ROUTE } from "~/constants"
import { tripPackageCurrencies } from "~/data"
import type { Flight, TripPackage } from "~/models"

const props = defineProps<{
	tripPackage: TripPackage
	currentFlight?: Flight
}>()
const emit = defineEmits<{
	(e: "onFlightChange", data?: Flight): void
}>()

const currenciesStore = useCurrenciesStore()

// Currencies
const { currentCurrency } = storeToRefs(currenciesStore)

// Flight
const onFlightChange = (data?: Flight) => {
	emit("onFlightChange", data)
}

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const openCheckout = () => {
	navigateTo(
		localePath(
			TRIP_PACKAGE_CHECKOUT_ROUTE(
				props.tripPackage.slug,
				props.currentFlight &&
					props.tripPackage.flights.indexOf(props.currentFlight)
			)
		)
	)
}
</script>

<style scoped>
.textShadow {
	text-shadow: 0 1px 2px rgba(48, 6, 16, 0.25), 0 0 6px rgba(43, 6, 52, 0.15);
}
</style>
