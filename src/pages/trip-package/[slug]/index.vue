<template>
	<div class="flex flex-col overflow-y-auto w-full" v-if="currentTripPackage">
		<Header with-logo :available-languages="availableLanguages" class="z-50" />

		<Gallery :gallery="currentTripPackage?.gallery ?? []" />

		<div class="relative page-padding">
			<SidePageIcon :src="FLOWER_LEFT4_SVG" class="-top-15 left-0" />

			<SidePageIcon :src="FLOWER_RIGHT2_SVG" class="-top-15 right-0" />
			<SidePageIcon :src="FLOWER_RIGHT1_SVG" class="top-140 -right-5" />

			<section
				class="flex flex-col lg:flex-row items-center lg:items-stretch justify-between pt-[47px] relative z-10 pb-4 md:pb-8 lg:pb-16 gap-10"
			>
				<div class="flex flex-col lg:max-w-[600px] gap-10 sm:gap-[52px]">
					<div class="flex flex-col gap-6 sm:gap-8">
						<RelativePath :relativePath="relativePath" />
						<div class="flex flex-col gap-0.5">
							<span
								class="font-medium text-[32px] sm:text-[36px] md:text-[42px] lg:text-[52px] text-[#272223] leading-tight font-roboto-serif"
							>
								{{ currentTripPackage.title[locale] }}
							</span>
							<span
								class="font-inter font-light text-[20px] sm:text-[24px] leading-none"
							>
								{{ currentTripPackage.subtitle[locale] }}
							</span>
						</div>
						<span class="font-light font-inter leading-normal">
							{{ currentTripPackage.description[locale] }}
						</span>
					</div>
					<div class="flex flex-col gap-12">
						<div class="flex flex-col gap-3">
							<span class="uppercase font-bold font-inter leading-tight">
								{{ t("trip_package_whats_included") }}
							</span>
							<div class="flex gap-y-4 gap-x-6 sm:gap-6 flex-wrap">
								<TripServiceBadge
									v-for="serv in currentTripPackage.services"
									:key="serv.id"
									:tripService="serv"
								/>
							</div>
						</div>
						<div class="flex flex-col gap-3">
							<span class="uppercase font-bold font-inter leading-tight">
								{{ t("trip_package_available_guide_languages") }}
							</span>
							<div
								class="flex flex-wrap gap-5 items-center w-full"
								v-if="currentTripPackage"
							>
								<GuideLanguageBadge
									v-for="language in currentTripPackage.guidelanguages"
									:key="language.id"
									:language="language"
								/>
							</div>
						</div>
					</div>
				</div>

				<TripPackagePageEdgeCard
					v-if="currentTripPackage"
					:trip-package="currentTripPackage"
					:current-flight="currentFlightDate"
					@on-flight-change="onFlightDateChange"
				/>
			</section>
		</div>

		<div class="relative page-padding">
			<SidePageIcon :src="FLOWER_LEFT3_SVG" class="top-45 left-0 -z-10" />

			<SidePageIcon :src="FLOWER_RIGHT4_SVG" class="bottom-20 -right-5" />

			<section
				class="flex flex-col py-8 sm:py-10 md:py-[52px] gap-4 sm:gap-6 md:gap-8"
			>
				<span
					class="font-roboto-serif font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-tight"
				>
					{{
						t(
							currentTripPackage.is_relocation
								? "trip_package_included_attractions_events"
								: "trip_package_included_attractions"
						)
					}}
				</span>

				<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
					<div class="w-full" v-for="attraction in attractions">
						<AttractionsCard :data="attraction" />
					</div>
				</div>
			</section>
		</div>

		<div class="page-padding">
			<section class="flex flex-col pt-4 py-8 gap-8">
				<Accommodations
					v-if="currentTripPackage"
					:data="currentTripPackage.accommodations"
				/>
			</section>

			<section class="flex flex-col pt-4 py-8">
				<div class="flex flex-col gap-2 mb-12 lg:(w-1/2)">
					<div class="flex gap-5 items-center">
						<p class="text-4xl font-medium font-roboto-serif">
							{{ t("trip_package_flight_title") }}
						</p>

						<SelectField
							:name="`locale`"
							:value="currentAirportId?.toString()"
							@change="onAirportChange"
						>
							<option v-for="airport of availableAirports" :value="airport.id">
								{{ airport.title[locale] }}
							</option>
						</SelectField>
					</div>

					<p class="text-base font-light font-inter">
						<span class="font-bold">{{
							t("trip_package_flight_description1")
						}}</span>
						{{ t("trip_package_flight_description2") }}
					</p>
				</div>

				<div class="flex flex-col gap-3 mb-16">
					<p class="text-base font-bold font-inter">
						{{ t("trip_package_flight_selected_date") }}
					</p>

					<TripPackageAvailableDates
						:flights="flights"
						:current-flight="currentFlightDate"
						@on-change="onFlightDateChange"
					/>
				</div>

				<div v-if="currentFlightDate" class="flex flex-col gap-16 mb-12">
					<FlightBox
						:key="currentFlightDate.departing_takeoff.toString()"
						departingFlight
						:takeoff="currentFlightDate.departing_takeoff"
						:takeoffAirportId="currentFlightDate.departing_takeoff_airport_id"
						:landing="currentFlightDate.departing_landing"
						:landingAirportId="currentFlightDate.departing_landing_airport_id"
						:duration="currentFlightDate.departing_duration"
					/>

					<FlightBox
						:key="currentFlightDate.returning_takeoff.toString()"
						:takeoff="currentFlightDate.returning_takeoff"
						:takeoffAirportId="currentFlightDate.returning_takeoff_airport_id"
						:landing="currentFlightDate.returning_landing"
						:landingAirportId="currentFlightDate.returning_landing_airport_id"
						:duration="currentFlightDate.returning_duration"
					/>
				</div>

				<button
					v-if="currentFlightDate"
					@click="hideCurrentFlight"
					class="btn-rounded self-end"
				>
					<i class="fi fi-rs-circle-xmark not-italic flex items-center gap-2">
						{{ t("trip_package_exclude_plane_ticket_button") }}
					</i>
				</button>
			</section>
		</div>

		<div
			class="flex flex-col gap-6 sm:gap-3 w-full bg-pink-100 py-[26px] my-[52px] items-center"
		>
			<span
				class="text-[32px] sm:text-[36px] md:text-[42px] xl:text-[52px] font-roboto-serif font-medium leading-tight text-[#272223] text-center"
			>
				{{ t("trip_package_check_other_packages") }}
			</span>
			<div
				class="flex items-center justify-center gap-y-6 gap-x-6 sm:gap-x-10 md:gap-x-16 lg:gap-x-[82px] text-pink-600 sm:flex-wrap w-3/4"
			>
				<button
					v-for="otherPackage of otherPackages"
					class="flex items-center gap-1.5"
					@click="openTripPackage(otherPackage.slug)"
				>
					<span
						class="text-base sm:text-[20px] md:text-[24px] font-medium font-roboto-serif leading-tight"
					>
						{{ otherPackage.title[locale] }}
					</span>
					<div class="flex items-center justify-center w-9 h-9">
						<i class="fi fi-sr-share-square text-[12px]"></i>
					</div>
				</button>
				<!-- <button
					class="flex items-center gap-1.5"
					v-if="previousPackage"
					@click="openTripPackage(previousPackage.slug)"
				>
					<div class="flex items-center justify-center w-9 h-9">
						<i class="fi fi-sr-angle-left text-[12px]"></i>
					</div>
					<span
						class="text-base sm:text-[20px] md:text-[24px] font-medium font-roboto-serif leading-tight"
					>
						{{ previousPackage.title[locale] }}
					</span>
				</button>

				<button
					class="flex items-center gap-1.5"
					v-if="nextPackage"
					@click="openTripPackage(nextPackage.slug)"
				>
					<span
						class="text-base sm:text-[20px] md:text-[24px] font-medium font-roboto-serif leading-tight"
					>
						{{ nextPackage.title[locale] }}
					</span>
					<div class="flex items-center justify-center w-9 h-9">
						<i class="fi fi-sr-angle-right text-[12px]"></i>
					</div>
				</button> -->
			</div>
		</div>

		<Contact />
		<Footer :available-languages="availableLanguages" />

		<WhatsappButton />
	</div>
</template>

<script lang="ts" setup>
import {
	FLOWER_LEFT3_SVG,
	FLOWER_LEFT4_SVG,
	FLOWER_RIGHT1_SVG,
	FLOWER_RIGHT2_SVG,
	FLOWER_RIGHT4_SVG,
	HOME_ROUTE,
	HOME_TRIP_PACKAGES_SECTION_ROUTE,
	TRIP_PACKAGE_ROUTE,
} from "~/constants"
import { languageToLocale, localeToLanguage } from "~/data"
import {
	type Attraction,
	type Flight,
	type RelativePathComponent,
	type TripPackage,
} from "~/models"

// General
const airportsStore = useAirportsStore()
const attractionsStore = useAttractionsStore()
const tripPackagesStore = useTripPackagesStore()
const { tripPackages } = storeToRefs(tripPackagesStore)
const { airports } = storeToRefs(airportsStore)

const props = computed(() => {
	const route = useRoute()
	const params = route.params
	const queryParams = route.query

	return {
		slug: params.slug as string,
		date: queryParams.date as string,
	}
})

// Available languages
const availableLanguages = computed(() => {
	return currentTripPackage.value
		? currentTripPackage.value.visibility_languages.map(
				(i) => localeToLanguage[i]
		  )
		: []
})

// Package
const currentTripPackage = ref<TripPackage>()
const otherPackages = ref<TripPackage[]>([])

const loadTripPackage = async () => {
	if (tripPackages.value.length === 0) {
		await tripPackagesStore.loadTripPackages()
	}

	const packageBySlug = tripPackages.value.find(
		(i) => i.slug === props.value.slug
	)

	if (!packageBySlug || !canShowPackage(packageBySlug)) {
		return openHome()
	}

	currentTripPackage.value = packageBySlug
	otherPackages.value = filterTripPackagesToShow(
		tripPackages.value.filter((i) => i.id !== currentTripPackage.value!.id),
		locale.value
	)
	currentFlightDate.value = currentTripPackage.value.flights[0]
}

// Attractions
const attractions = ref<Attraction[]>()

const loadAttractions = async (id: number) => {
	attractions.value = await attractionsStore.getAttractionsByTripPackageId(id)
}

// Flights
const currentFlightDate = ref<Flight>()
const currentAirportId = ref<number>()
const flights = computed(() => {
	return currentTripPackage.value
		? currentTripPackage.value.flights.filter(
				(i) => i.departing_takeoff_airport_id == currentAirportId.value
		  )
		: []
})
const availableAirports = computed(() => {
	return airports.value.filter((i) =>
		currentTripPackage.value?.flights
			.map((i) => i.departing_takeoff_airport_id)
			.includes(i.id)
	)
})

const onFlightDateChange = (data?: Flight) => {
	currentFlightDate.value = data

	if (data) currentAirportId.value = data.departing_takeoff_airport_id
}
const onAirportChange = (data: string) => {
	currentAirportId.value = Number(data)
	currentFlightDate.value = flights.value[0]
}
const hideCurrentFlight = () => {
	currentFlightDate.value = undefined
}

// Relative path
const relativePath = computed(() => {
	return [
		{
			label: "company_name",
			path: HOME_ROUTE,
		},
		{
			label: "all_packages",
			path: HOME_TRIP_PACKAGES_SECTION_ROUTE,
		},
		{
			label: currentTripPackage.value?.title,
		},
	] as RelativePathComponent[]
})

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
const openTripPackage = (slug: string) =>
	navigateTo(localePath(TRIP_PACKAGE_ROUTE(slug)))

// Watchers
watch(
	() => currentTripPackage.value,
	(value) => {
		if (!value) return

		useHead(
			generateHead(
				locale.value,
				value.title,
				value.title_metadata,
				value.description_metadata
			)
		)
	}
)

watch(
	() => availableAirports.value,
	(value) => {
		if (!value) return

		const filteredAirports = value.filter((i) => i.locale == locale.value) ?? []

		onAirportChange(
			(filteredAirports.length > 0
				? filteredAirports[0].id
				: value[0].id
			).toString()
		)
	}
)

// Life cycle
onMounted(async () => {
	await loadTripPackage()

	if (!currentTripPackage.value) {
		openHome()
		return
	}
	const availableLocales = availableLanguages.value.map(
		(i) => languageToLocale[i]
	)
	if (!availableLocales.includes(locale.value)) {
		openHome()
		return
	}

	loadAttractions(currentTripPackage.value.id)
})
</script>
