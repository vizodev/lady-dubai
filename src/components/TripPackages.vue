<template>
	<!-- class="relative flex flex-col w-full pt-10 sm:pt-[64px] lg:pt-[100px] pb-10 sm:pb-[114px] lg:pb-[150px] items-center px-6 sm:px-8 lg:px-16 2xl:px-8" -->
	<div
		:id="TRIP_PACKAGES_SECTION"
		class="relative flex flex-col w-full pt-10 sm:pt-[64px] lg:pt-[100px] pb-10 sm:pb-[114px] lg:pb-[150px] items-center page-padding"
	>
		<SidePageIcon :src="FLOWER_LEFT2_SVG" class="-top-35 left-0" />

		<SidePageIcon :src="FLOWER_RIGHT1_SVG" class="bottom-85 -right-10" />

		<div
			class="mb-8 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full sm:max-w-[calc((456px*2)+(32px))] xl:max-w-[calc((456px*3)+(32px*2))]"
		>
			<div
				class="col-span flex justify-center w-full items-stretch"
				v-for="tripPackage in packages.tripPackages"
			>
				<div class="w-full">
					<PackageCard :tripPackage="tripPackage" class="h-full" />
				</div>
			</div>
		</div>

		<div class="bg-white shadow-md rounded-xl p-8">
			<div class="mb-3 bg-off-black w-max py-1 px-2 rounded-md">
				<p class="text-[10px] text-white font-bold font-inter uppercase">
					{{ t("tripPackage.buildOwnPackageGroups") }}
				</p>
			</div>

			<div class="mb-6">
				<p class="font-roboto-serif font-medium text-4xl mb-1">
					{{ t("tripPackage.buildOwnPackageTitle") }}
				</p>

				<p class="text-sm font-inter font-medium text-gray-600">
					{{ t("tripPackage.buildOwnPackageDescription") }}
				</p>
			</div>

			<div
				class="flex flex-col items-stretch sm:(flex-row items-start gap-3) justify-between"
			>
				<div class="flex flex-wrap gap-3 mb-4 sm:mb-0">
					<div v-for="language of languages" class="rounded-box">
						{{ language.label.en }}
					</div>
				</div>

				<a rel="noopener" :href="`#${CONTACT_SECTION}`" class="btn-primary">
					{{ t("tripPackage.buildOwnPackageButton") }}
				</a>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import {
	CONTACT_SECTION,
	FLOWER_LEFT2_SVG,
	FLOWER_RIGHT1_SVG,
	TRIP_PACKAGES_SECTION,
} from "~/constants"
import { type TripPackage } from "~/models"

// General
const tripPackagesStore = useTripPackagesStore()
const languagesStore = useLanguagesStore()

// Languages
const { languages } = storeToRefs(languagesStore)

// Trip packages
const { tripPackages } = storeToRefs(tripPackagesStore)
const packages = reactive({
	baseTripPackages: [] as TripPackage[],
	tripPackages: [] as TripPackage[],
})

const loadTripPackages = async () => {
	packages.baseTripPackages = tripPackages.value
}

// Locales
const { t } = useI18n()

// Listeners
const resizeEventName = "resize"
const handleTripPackagesAccordingToScreenSize = () => {
	if (window.innerWidth < 640) {
		packages.tripPackages = packages.baseTripPackages.slice(0, 3)
	} else if (window.innerWidth < 1024 && window.innerWidth > 639) {
		packages.tripPackages = packages.baseTripPackages.slice(0, 4)
	} else {
		packages.tripPackages = packages.baseTripPackages.slice(0, 6)
	}
}

// Life cylce
onMounted(async () => {
	await loadTripPackages()

	handleTripPackagesAccordingToScreenSize()

	// Limit the number of trip packages to 3 when the screen is sm or smaller
	window.addEventListener(
		resizeEventName,
		handleTripPackagesAccordingToScreenSize
	)
})

onUnmounted(() => {
	window.removeEventListener(
		resizeEventName,
		handleTripPackagesAccordingToScreenSize
	)
})
</script>
