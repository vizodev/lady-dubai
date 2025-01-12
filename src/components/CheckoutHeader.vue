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
</template>

<script setup lang="ts">
import { HOME_ROUTE, LOGO_FOOTER_SVG } from "~/constants"

// Locales
const { t } = useI18n()
const localePath = useLocalePath()

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
</script>
