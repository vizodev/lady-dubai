<template>
	<CheckoutHeader />

	<div class="page-padding">
		<ReturnText @click="openHome" />

		<div
			class="bg-white rounded-2xl shadow flex flex-col items-center gap-12 pt-8 pb-12"
		>
			<div class="flex flex-col gap-4 text-center font-inter px-5">
				<p class="text-2xl font-bold">
					{{ t("checkout_payment_approved_title") }}
				</p>
				<p>{{ t("checkout_payment_approved_description") }}</p>
			</div>

			<img :src="CHECK_SVG" alt="check icon" class="w-20" />

			<img
				:src="PAYMENT_APPROVED_BANNER_IMAGE"
				alt="banner"
				class="h-72 object-cover"
			/>

			<button @click="openHome" class="btn-rounded">
				{{ t("checkout_payment_approved_button") }}
			</button>
		</div>
	</div>

	<Footer />
</template>

<script setup lang="ts">
import {
	CHECK_SVG,
	HOME_ROUTE,
	PAYMENT_APPROVED_BANNER_IMAGE,
} from "~/constants"

// Locales
const { t } = useI18n()
const localePath = useLocalePath()

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
</script>
