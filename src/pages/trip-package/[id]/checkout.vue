<template>
	<div>
		<header class="flex justify-between items-center px-20 py-6 mb-10">
			<img src="/logo-footer.svg" alt="Logo" class="h-10" />

			<p class="text-3xl">Checkout</p>

			<div class="flex gap-3 justify-center text-lg">
				<i class="fi fi-rr-info"></i>

				<p>Support</p>
			</div>
		</header>

		<section class="flex flex-col gap-16 px-20 mb-64">
			<div>
				<div
					@click="openTripPackage"
					class="text-[16px] text-pink-600 flex gap-3 cursor-pointer mb-6"
				>
					<i class="fi fi-ss-angle-double-left"></i>

					<p>RETURN</p>
				</div>

				<div class="flex gap-6">
					<div class="w-2/3">
						<div class="flex flex-col gap-8">
							<CheckoutSession title="Traveller information"></CheckoutSession>

							<CheckoutSession title="Contact"></CheckoutSession>

							<CheckoutSession title="Payment Method"></CheckoutSession>

							<CheckoutSession title="Card Details"></CheckoutSession>
						</div>
					</div>

					<div class="bg-white rounded-2xl w-1/3 p-8">
						<img src="/package.svg" alt="package icon" class="mb-8" />

						<p class="text-3xl">{{ currentTripPackage?.title }}</p>

						<Separator class="my-12" />

						<div class="flex justify-between font-bold">
							<p class="text-lg font-inter">TOTAL</p>

							<p class="font-roboto-serif text-3xl whitespace-nowrap">
								{{ `$ ${currentTripPackage?.price?.usd}` }}
								<span class="font-inter text-lg">Dirham</span>
							</p>
						</div>
					</div>
				</div>
			</div>

			<div>
				<button
					type="submit"
					class="text-white bg-pink-500 rounded-xl px-5 xl:px-6 py-2.5 xl:py-3 font-inter font-bold sm:text-[18px] lg:text-[20px] 2xl:text-[24px] textShadow self-end tracking-[0.02]"
				>
					PURCHASE
				</button>
			</div>
		</section>

		<Footer />
	</div>
</template>

<script setup lang="ts">
import { type TripPackage2 } from "~/models"

// General
const props = computed(() => {
	const params = useRoute().params

	return {
		id: params.id as string,
	}
})

// Stores
const tripPackagesStore = useTripPackagesStore()

// Trip package
const { tripPackages } = storeToRefs(tripPackagesStore)
const currentTripPackage = ref<TripPackage2>()

const loadTripPackage = async () => {
	const tripPackage = tripPackages.value.find(
		(tripPackage) => tripPackage.id === props.value.id
	)

	if (!tripPackage) {
		currentTripPackage.value = await tripPackagesStore.loadTripPackageById(
			props.value.id
		)

		return
	}

	currentTripPackage.value = tripPackage
}

// Routes
const openTripPackage = () => navigateTo(`/trip-package/${props.value.id}`)

// Life cycle
onMounted(() => loadTripPackage())
</script>
