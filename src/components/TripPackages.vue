<template>
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
				v-for="tripPackage in tripPackages"
			>
				<div class="w-full">
					<PackageCard :tripPackage="tripPackage" class="h-full" />
				</div>
			</div>
		</div>

		<div class="bg-white shadow-md rounded-xl p-8">
			<div class="mb-3 bg-off-black w-max py-1 px-2 rounded-md">
				<p class="text-[10px] text-white font-bold font-inter uppercase">
					{{ t("trip_package_build_own_package_groups") }}
				</p>
			</div>

			<div class="mb-6">
				<p class="font-roboto-serif font-medium text-4xl mb-1">
					{{ t("trip_package_build_own_package_title") }}
				</p>

				<p class="text-sm lg:text-base font-inter font-medium text-gray-600">
					{{ t("trip_package_build_own_package_description") }}
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
					{{ t("see_more") }}
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

// General
const tripPackagesStore = useTripPackagesStore()
const languagesStore = useLanguagesStore()

// Languages
const { languages } = storeToRefs(languagesStore)

// Locales
const { t, locale } = useI18n()

// Trip packages
const tripPackages = computed(() =>
	filterTripPackagesToShow(tripPackagesStore.tripPackages, locale.value)
)
</script>
