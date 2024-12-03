<template>
	<header
		class="flex justify-between items-center py-6 mb-10 px-6 md:px-10 lg:px-16 xl:px-[100px] 2xl:px-[200px] 3xl:px-[245px]"
	>
		<img
			:src="LOGO_FOOTER_SVG"
			alt="Logo"
			@click="openHome"
			class="cursor-pointer h-8 md:h-10"
		/>

		<p class="text-2xl md:text-3xl">{{ t("checkout_checkout") }}</p>

		<i class="fi fi-rr-info flex gap-3 items-center">
			<p class="text-base md:text-lg not-italic">
				{{ t("checkout_support") }}
			</p>
		</i>
	</header>

	<BaseForm
		:validation-schema="checkoutSchema"
		@submit="onSubmit"
		class="mb-32 lg:mb-64 px-10 md:px-14 lg:px-20 xl:px-[140px] 2xl:px-[200px] 3xl:px-[245px]"
	>
		<div class="mb-16">
			<div
				@click="openTripPackage"
				class="text-[16px] text-pink-600 flex gap-3 cursor-pointer mb-6 w-max"
			>
				<i class="fi fi-ss-angle-double-left"></i>

				<p>{{ t("checkout_return") }}</p>
			</div>

			<div class="flex flex-col gap-16 xl:flex-row xl:gap-6">
				<div class="flex-[3] flex-grow-[2]">
					<div class="flex flex-col gap-8">
						<CheckoutSession :title="t('checkout_traveller_info')">
							<div class="flex flex-col gap-14">
								<transition-group>
									<div
										v-for="traveller in Array.from(
											Array(travellersCount).keys()
										)"
										:key="traveller"
									>
										<p class="font-inter text-2xl font-light mb-6">
											{{ t("checkout_traveller") }} {{ traveller + 1 }}
										</p>

										<div class="grid grid-cols-2 gap-6">
											<TextField
												:name="`users[${traveller}].name`"
												:label="t('form_first_name_label')"
												:placeholder="t('form_first_name_placeholder')"
											/>
											<TextField
												:name="`users[${traveller}].lastName`"
												:label="t('form_last_name_label')"
												:placeholder="t('form_last_name_placeholder')"
											/>
											<DateField
												:name="`users[${traveller}].birthday`"
												:label="t('form_birth_label')"
											/>

											<SelectField
												:name="`users[${traveller}].gender`"
												:label="t('form_gender_label')"
											>
												<option v-for="gender of genders" :value="gender.value">
													{{ gender.title }}
												</option>
											</SelectField>

											<SelectField
												:name="`users[${traveller}].nationality`"
												:label="t('form_nationality_label')"
											>
												<option
													v-for="country of countries"
													:value="country.name"
												>
													{{ country.name }}
												</option>
											</SelectField>

											<TextField
												:name="`users[${traveller}].passportId`"
												:label="t('form_passport_label')"
												:placeholder="t('form_passport_placeholder')"
											/>
											<DateField
												:name="`users[${traveller}].passportExpiration`"
												:label="t('form_passport_expiry_date_label')"
											/>

											<SelectField
												:name="`users[${traveller}].passportIssuedFrom`"
												:label="t('form_passport_issuing_country_label')"
											>
												<option
													v-for="country of countries"
													:value="country.name"
												>
													{{ country.name }}
												</option>
											</SelectField>
										</div>
									</div>
								</transition-group>

								<button @click="addTraveller" class="btn-rounded">
									{{ t("checkout_add_traveller") }}
								</button>
							</div>
						</CheckoutSession>

						<CheckoutSession :title="t('checkout_contact_info')">
							<div class="flex gap-6 flex-col md:flex-row">
								<TextField
									name="email"
									:label="t('form_email_label')"
									:placeholder="t('form_email_placeholder')"
									class="grow-[3]"
								/>

								<TextField
									name="countryCode"
									:label="t('form_country_code_label')"
									:placeholder="t('form_country_code_placeholder')"
								/>

								<TextField
									name="phone"
									:label="t('form_mobile_label')"
									:placeholder="t('form_mobile_placeholder')"
								/>
							</div>
						</CheckoutSession>
					</div>
				</div>

				<div class="bg-white rounded-2xl flex-1 p-8 h-min shadow">
					<div class="flex flex-col gap-8 mb-8">
						<img :src="PACKAGE_SVG" alt="package icon" class="w-min" />

						<p class="text-4xl font-medium font-roboto-serif">
							{{ currentTripPackage?.title[locale] }}
						</p>
					</div>

					<div v-if="currentFlight" class="flex flex-col gap-8 mb-12">
						<div class="text-xl font-inter">
							<p class="font-bold">
								{{ handleFlightLabel(currentFlight) }}
								<span class="font-light">{{
									handleFlightYearLabel(currentFlight)
								}}</span>
							</p>

							<p
								@click="toogleShowFlightsModal"
								class="text-pink-600 font-bold text-sm cursor-pointer"
							>
								{{ t("checkout_alter_date") }}
							</p>
						</div>

						<div class="flex flex-col gap-3">
							<div class="flex items-center gap-3">
								<span
									class="font-bold font-roboto-serif text-2xl whitespace-nowrap"
								>
									{{
										`${tripPackageCurrencies[currentCurrency].symbol} ${currentFlight.price[currentCurrency]}`
									}}
								</span>
								<span class="font-inter font-bold leading-none">
									{{ t(`currency_${currentCurrency}`) }}
								</span>
							</div>

							<CheckoutFlightDetails
								:takeOffAirportId="currentFlight.departing_takeoff_airport_id"
								:landingAirportId="currentFlight.departing_landing_airport_id"
								:takeOffDate="currentFlight.departing_takeoff"
								departingFlight
							/>

							<CheckoutFlightDetails
								:takeOffAirportId="currentFlight.returning_takeoff_airport_id"
								:landingAirportId="currentFlight.returning_landing_airport_id"
								:takeOffDate="currentFlight.returning_takeoff"
							/>
						</div>
					</div>

					<div class="flex flex-col gap-6">
						<CheckoutAgeBox
							title="Travellers"
							description="All ages"
							:current-value="travellersCount"
							@on-change="onTravellersChange"
						/>
					</div>

					<Separator class="my-12" />

					<div class="flex justify-between font-bold">
						<p class="text-lg font-inter">{{ t("checkout_total") }}</p>

						<p class="font-roboto-serif text-3xl whitespace-nowrap">
							{{
								`${tripPackageCurrencies[currentCurrency].symbol} ${totalPrice}`
							}}
							<span class="font-inter text-lg">{{
								t(`currency_${currentCurrency}`)
							}}</span>
						</p>
					</div>
				</div>
			</div>
		</div>

		<div class="ml-12">
			<CheckboxField name="privacyPolicy" :value="true" class="mb-8">
				<p class="text-base font-inter font-light text-brown-700">
					{{ t("checkout_privacy_policy_description1") }}
					<span class="text-pink-600 font-bold">{{
						t("checkout_privacy_policy_description2")
					}}</span>
					{{ t("checkout_privacy_policy_description3") }}
					<span class="text-pink-600 font-bold">{{
						t("checkout_privacy_policy_description4")
					}}</span>
				</p>
			</CheckboxField>

			<Loading v-if="loadingForm" />
			<button v-else type="submit" class="btn-primary">
				{{ t("checkout_purchase_button") }}
			</button>
		</div>
	</BaseForm>

	<Footer />

	<!-- Modals -->
	<div
		v-if="showFlightsModal"
		class="fixed z-[9999] top-0 left-0 h-screen w-screen flex items-center justify-center bg-black bg-opacity-50"
	>
		<div class="bg-white rounded-lg shadow-md px-8 py-10 w-[90%] md:w-[460px]">
			<p class="mb-3 font-bold font-inter text-base uppercase">
				{{ t("next_available_dates") }}
			</p>

			<TripPackageAvailableDates
				v-if="currentTripPackage && currentFlight"
				:flights="currentTripPackage.flights"
				:current-flight="currentFlight"
				show-by-aiports
				@on-change="onFlightChange"
				class="mb-8"
			/>

			<button @click="toogleShowFlightsModal" class="btn-primary w-full">
				{{ t("checkout_modal_button") }}
			</button>
		</div>
	</div>
</template>

<script setup lang="ts">
import {
	API_PAYMENTS,
	HOME_ROUTE,
	LOGO_FOOTER_SVG,
	PACKAGE_SVG,
	TRIP_PACKAGE_ROUTE,
} from "~/constants"
import { genders, tripPackageCurrencies } from "~/data"
import { checkoutSchema, type CheckoutSchemaSubmit } from "~/formSchemas"
import {
	type Flight,
	type GetPaymentInfoBody,
	type TripPackage,
} from "~/models"

// General
const props = computed(() => {
	const params = useRoute().params
	const queryParams = useRoute().query

	return {
		slug: params.slug as string,
		date: queryParams.date as string,
	}
})

// Stores
const tripPackagesStore = useTripPackagesStore()
const countriesStore = useCountriesStore()
const currenciesStore = useCurrenciesStore()

// Currencies
const { currentCurrency } = storeToRefs(currenciesStore)

// Countries
const { countries } = storeToRefs(countriesStore)

// Trip package
const { tripPackages } = storeToRefs(tripPackagesStore)
const currentTripPackage = ref<TripPackage>()

const loadTripPackage = async () => {
	const packageBySlug =
		tripPackages.value.find((i) => i.slug === props.value.slug) ??
		(await tripPackagesStore.getTripPackageBySlug(props.value.slug))

	if (!packageBySlug || !canShowPackage(packageBySlug)) {
		return openHome()
	}

	currentTripPackage.value = packageBySlug
}

// Travellers
const travellersCount = ref(1)
const totalPrice = computed(() => {
	if (!currentTripPackage.value) return 0

	return getTripPackagePrice(
		currentTripPackage.value,
		currentFlight.value,
		travellersCount.value,
		currentCurrency.value
	)
})

const addTraveller = () => travellersCount.value++
const onTravellersChange = (data: number) => (travellersCount.value = data)

// Flight
const currentFlight = ref<Flight>()
const showFlightsModal = ref(false)

const toogleShowFlightsModal = () => {
	showFlightsModal.value = !showFlightsModal.value
}
const onFlightChange = (data: Flight) => {
	currentFlight.value = data
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

	const utc1 = Date.UTC(start.getFullYear(), start.getMonth(), start.getDate())
	const utc2 = Date.UTC(end.getFullYear(), end.getMonth(), end.getDate())

	const diffInDays = Math.floor((utc2 - utc1) / (1000 * 60 * 60 * 24))

	if (startMonth === endMonth) {
		return `${startDay} to ${endDay} ${endMonth} (${diffInDays} days)`
	} else {
		return `${startDay} ${startMonth} to ${endDay} ${endMonth} (${diffInDays} days)`
	}
}
const handleFlightYearLabel = (data: Flight) => {
	const to = new Date(data.returning_landing)

	return to.getFullYear()
}

// Form
const loadingForm = ref(false)

const onSubmit = async (formData: CheckoutSchemaSubmit) => {
	loadingForm.value = true

	try {
		if (!currentTripPackage.value) return

		const body: GetPaymentInfoBody = {
			tripPackage: currentTripPackage.value,
			data: formData,
			currency: currentCurrency.value,
			flight: currentFlight.value,
		}
		const res = await useFetch(API_PAYMENTS(currentTripPackage.value!.id), {
			method: "POST",
			body,
		})
		const data = res.data.value as any

		if (!data) return

		navigateTo(data.link, {
			external: true,
		})
	} catch (error) {
		console.error(error)
	}

	loadingForm.value = false
}

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
const openTripPackage = () => {
	navigateTo(localePath(TRIP_PACKAGE_ROUTE(props.value.slug)))
}

// Head
useHead({ title: t("checkout_checkout") })

// Watchers
watch(
	() => currentTripPackage.value,
	(data) => {
		if (!data) return

		if (props.value?.date === undefined) {
			currentFlight.value = undefined
			return
		}

		let idx = Number(props.value?.date)

		idx = idx <= data.flights.length - 1 ? idx : 0

		currentFlight.value = data.flights[idx]
	}
)

// Life cycle
onMounted(async () => {
	loadTripPackage()
})
</script>
