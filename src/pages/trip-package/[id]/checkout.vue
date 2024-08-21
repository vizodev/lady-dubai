<template>
	<div>
		<header
			class="flex justify-between items-center py-6 mb-10 px-6 md:px-10 lg:px-16 xl:px-[100px] 2xl:px-[200px] 3xl:px-[245px]"
		>
			<img :src="LOGO_FOOTER_SVG" alt="Logo" class="h-8 md:h-10" />

			<p class="text-2xl md:text-3xl">Checkout</p>

			<i class="fi fi-rr-info flex gap-3 items-center">
				<p class="text-base md:text-lg not-italic">SUPPORT</p>
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
					class="text-[16px] text-pink-600 flex gap-3 cursor-pointer mb-6"
				>
					<i class="fi fi-ss-angle-double-left"></i>

					<p>RETURN</p>
				</div>

				<div class="flex flex-col gap-16 xl:flex-row xl:gap-6">
					<div class="flex-[3] flex-grow-[2]">
						<div class="flex flex-col gap-8">
							<CheckoutSession title="Traveller information">
								<div class="flex flex-col gap-14">
									<transition-group>
										<div
											v-for="traveller of Array.from(
												Array(travellersCount).keys()
											)"
											:key="traveller"
										>
											<p class="font-inter text-2xl font-light mb-6">
												Traveller {{ traveller + 1 }}
											</p>

											<div class="grid grid-cols-2 gap-6">
												<TextField
													:name="`users[${traveller}].name`"
													label="FIRST NAME"
													placeholder="Gabriel"
												/>
												<TextField
													:name="`users[${traveller}].lastName`"
													label="LAST NAME"
													placeholder="Doe"
												/>
												<DateField
													:name="`users[${traveller}].birthday`"
													label="DATE OF BIRTH"
													placeholder="DD/MM/YYYY"
												/>

												<SelectField
													:name="`users[${traveller}].gender`"
													label="GENDER"
												>
													<option
														v-for="gender of genders"
														:value="gender.value"
													>
														{{ gender.title }}
													</option>
												</SelectField>

												<TextField
													:name="`users[${traveller}].nationality`"
													label="NATIONALITY"
													placeholder="Country Born in"
												/>
												<TextField
													:name="`users[${traveller}].passportId`"
													label="PASSPORT ID"
													placeholder="GH12345"
												/>
												<DateField
													:name="`users[${traveller}].passportExpiration`"
													label="PASSPORT EXPIRY DATE"
													placeholder="DD/MM/YYYY"
												/>
												<TextField
													:name="`users[${traveller}].passportIssuedFrom`"
													label="PASSPORT ISSUING COUNTRY"
													placeholder="Country"
												/>
											</div>
										</div>
									</transition-group>

									<button @click="addTraveller" class="btn-rounded">
										Add Traveller
									</button>
								</div>
							</CheckoutSession>

							<CheckoutSession title="Contact">
								<div class="flex gap-6 flex-col md:flex-row">
									<TextField
										name="email"
										label="EMAIL"
										placeholder="Johndoe@gmail.com"
										class="grow-[3]"
									/>

									<TextField
										name="countryCode"
										label="COUNTRY CODE"
										placeholder="+ 55 (Brasil)"
									/>

									<TextField
										name="phone"
										label="MOBILE"
										placeholder="12345-678910"
									/>
								</div>
							</CheckoutSession>

							<CheckoutSession title="Payment Method">
								<div class="flex justify-between pr-8 flex-col sm:flex-row">
									<RadioButtonField
										v-for="method of paymentMethods"
										name="paymentMethod"
										:value="method.value"
										@on-change="onChangeCurrentPaymentMethod"
										>{{ method.title }}</RadioButtonField
									>
								</div>
							</CheckoutSession>

							<transition>
								<CheckoutSession
									v-if="currentPaymentMethod === creditCardValue"
									title="Card Details"
								>
									<div class="flex flex-col gap-6">
										<TextField
											name="cardNumber"
											label="NUMBER"
											placeholder="0000 0000 0000 0000"
										/>
										<TextField
											name="cardName"
											label="NAME ON THE CARD"
											placeholder="Doe"
										/>

										<div class="flex gap-6">
											<DateField name="cardExpiration" label="VALID." />
											<TextField name="cardCvv" label="CVV" placeholder="000" />
										</div>
									</div>
								</CheckoutSession>
							</transition>
						</div>
					</div>

					<div class="bg-white rounded-2xl flex-1 p-8 h-min shadow">
						<div class="flex flex-col gap-8 mb-8">
							<img :src="PACKAGE_SVG" alt="package icon" class="w-min" />

							<p class="text-3xl font-roboto-serif">
								{{ currentTripPackage?.title }}
							</p>
						</div>

						<TripPackageAvailableDates
							v-if="currentTripPackage"
							:flights="currentTripPackage.flights"
							:initial-value="initialDate"
							@on-change="onFlightChange"
							class="mb-12"
						/>

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
							<p class="text-lg font-inter">TOTAL</p>

							<p
								v-if="currentTripPackage"
								class="font-roboto-serif text-3xl whitespace-nowrap"
							>
								{{ `$ ${currentTripPackage.price.usd}` }}
								<span class="font-inter text-lg">Dirham</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div class="ml-12">
				<CheckboxField name="privacyPolicy" :value="true" class="mb-8">
					<p class="text-base font-inter font-light text-brown-700">
						I have read and accepted the
						<span class="text-pink-600 font-bold">purchase conditions</span>,
						<span class="text-pink-600 font-bold">privacy policy</span> and
						<span class="text-pink-600 font-bold"
							>changes and cancellations policy.</span
						>
					</p>
				</CheckboxField>

				<button type="submit" class="btn-primary">PURCHASE</button>
			</div>
		</BaseForm>

		<Footer />
	</div>
</template>

<script setup lang="ts">
import { type AvailableDate, type Flight, type TripPackage } from "~/models"
import {
	checkoutSchema,
	creditCardValue,
	type CheckoutSchemaSubmit,
} from "~/formSchemas"
import {
	HOME_ROUTE,
	LOGO_FOOTER_SVG,
	PACKAGE_SVG,
	TRIP_PACKAGE_ROUTE,
} from "~/constants"
import { genders, paymentMethods } from "~/data"

// General
const props = computed(() => {
	const params = useRoute().params
	const queryParams = useRoute().query

	return {
		id: Number(params.id),
		date: queryParams.date as string,
	}
})

// Stores
const tripPackagesStore = useTripPackagesStore()

// Trip package
const { tripPackages } = storeToRefs(tripPackagesStore)
const currentTripPackage = ref<TripPackage>()

const loadTripPackage = async () => {
	currentTripPackage.value =
		tripPackages.value.find((i) => i.id === props.value.id) ??
		(await tripPackagesStore.getTripPackageById(props.value.id))

	if (!currentTripPackage.value) openHome()
}

// Travellers
const travellersCount = ref(1)

const addTraveller = () => travellersCount.value++
const onTravellersChange = (data: number) => (travellersCount.value = data)

// Date
const currentFlight = ref<Flight>()
const initialDate = computed(() => {
	return currentTripPackage.value?.flights[Number(props.value?.date ?? 0)]
})

const onFlightChange = (data: Flight) => {
	currentFlight.value = data
}

// Form
const currentPaymentMethod = ref<string>()

const onChangeCurrentPaymentMethod = (data: string) => {
	currentPaymentMethod.value = data
}

const onSubmit = (data: CheckoutSchemaSubmit) => {
	console.log(data)
}

// Routes
const openTripPackage = () => navigateTo(TRIP_PACKAGE_ROUTE(props.value.id))
const openHome = () => navigateTo(HOME_ROUTE)

// Life cycle
onMounted(() => loadTripPackage())
</script>
