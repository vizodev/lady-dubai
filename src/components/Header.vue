<template>
	<header
		class="flex w-screen justify-between items-center fixed top-0 z-10 px-4 sm:px-[40px] lg:px-[100px] h-[75px] z-100"
		:class="{
			'bg-[#FFC1D3] shadow-md xl:(bg-transparent shadow-none)': !paintHeaderBg,
			'bg-[#FFC1D3] !shadow-md': paintHeaderBg,
			'xl:justify-end': !props.withLogo && !paintHeaderBg,
		}"
	>
		<div
			class="cursor-pointer mx-5"
			:class="{
				'xl:hidden': !showLogo,
			}"
		>
			<img
				:src="paintHeaderBg ? LOGO_WHITE_SVG : LOGO_SVG"
				@click="openHome"
				alt="logo"
				class="hidden xl:block h-[40px] mr-5"
			/>
			<img
				:src="LOGO_WHITE_SVG"
				@click="openHome"
				alt="logo"
				class="block xl:hidden h-[40px]"
			/>
		</div>

		<button class="xl:hidden" @click="showMenu = true">
			<img :src="MENU_SVG" alt="" />
		</button>

		<!-- Desktop menu -->
		<div class="justify-between w-max-[1100px] text-white hidden xl:(flex)">
			<!-- Trip Packages dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ t("header_packages") }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content left-0 flex-col gap-6 group-hover:flex">
					<div class="flex gap-8 items-center">
						<img
							:key="currentTripPackageSelected?.gallery[0]"
							:src="currentTripPackageSelected?.gallery[0]"
							class="w-50 h-40 object-cover"
						/>

						<div class="flex flex-col gap-6">
							<p
								v-for="tripPackage of tripPackages"
								@mouseenter="() => onTripPackageHover(tripPackage)"
								@click="openTripPackage(tripPackage.slug)"
								class="max-w-72 text-base uppercase text-brown-700 font-medium"
								:class="{
									'!text-pink-600 font-bold':
										tripPackage.id === currentTripPackageSelected?.id,
								}"
							>
								{{ tripPackage.title[locale] }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<!-- Attractions dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ t("header_attractions") }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content left-0 flex-col gap-6 group-hover:flex">
					<div class="flex h-full gap-8">
						<div class="flex flex-col gap-4 self-center">
							<p
								v-for="category of filteredCategories"
								:key="category.id"
								@mouseenter="() => onAttractionCategorySelect(category)"
								class="font-inter text-sm font-bold text-black uppercase cursor-pointer"
								:class="{
									'!text-pink-600':
										category.id === currentAttractionCategorySelected?.id,
								}"
							>
								{{ category.title[locale] }}

								<i
									v-if="category.id === currentAttractionCategorySelected?.id"
									class="fi fi-rs-angle-right ml-1"
								></i>
							</p>
						</div>

						<div class="border-l-1 border-black"></div>

						<div class="self-center flex items-center">
							<div class="my-3 flex flex-col gap-4">
								<p
									v-for="attraction of currentAttractions"
									:key="attraction.id"
									@mouseenter="() => onAttractionHover(attraction)"
									@click="openAttraction(attraction.slug)"
									class="font-inter text-base font-medium text-off-black"
									:class="{
										'!text-pink-600':
											attraction.id === currentAttractionSelected?.id,
									}"
								>
									{{ attraction.title[locale] }}
								</p>
							</div>
						</div>

						<img
							:key="currentAttractionSelected?.banner"
							:src="currentAttractionSelected?.banner"
							class="w-80 h-60 object-cover"
						/>
					</div>
				</div>
			</div>

			<!-- Relocation dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ t("header_relocation") }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content left-0 flex-col gap-6 group-hover:flex">
					<div class="flex gap-8 items-center">
						<img
							:key="currentRelocationEventSelected?.gallery[0]"
							:src="currentRelocationEventSelected?.gallery[0]"
							class="w-50 h-40 object-cover"
						/>

						<div class="flex flex-col gap-6">
							<p
								v-for="relocationEvent of relocationEvents"
								@mouseenter="() => onRelocationEventHover(relocationEvent)"
								@click="openAttraction(relocationEvent.slug)"
								class="max-w-72 text-base uppercase text-brown-700 font-medium"
								:class="{
									'!text-pink-600 font-bold':
										relocationEvent.id === currentRelocationEventSelected?.id,
								}"
							>
								{{ relocationEvent.title[locale] }}
							</p>
						</div>
					</div>
				</div>
			</div>

			<p @click="openBlog" class="font-medium font-inter uppercase text-center">
				{{ t("header_travel_blog") }}
			</p>

			<button
				@click="scrollToId(CONTACT_SECTION)"
				class="font-medium font-inter uppercase"
			>
				{{ t("header_contact_us") }}
			</button>

			<p
				@click="openWhyUs"
				class="font-medium font-inter uppercase text-center"
			>
				{{ t("header_why_us") }}
			</p>

			<!-- Currencies dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ getCurrencyName(currentCurrency) }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content flex-col gap-6 group-hover:flex">
					<p
						class="text-black uppercase font-inter font-medium text-normal cursor-pointer duration-[.2s] hover:(text-blue-500)"
						v-for="currency of Object.keys(tripPackageCurrencies)"
						@click="changeCurrentCurrency(currency as Currency)"
					>
						{{ getCurrencyName(currency as Currency) }}
					</p>
				</div>
			</div>

			<!-- Languages dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<LanguageFlag
						class="text-white pointer-events-none"
						:language="localeToLanguage[locale as keyof typeof localeToLanguage]"
					/>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content flex-col gap-6 group-hover:flex">
					<LanguageFlag
						v-for="language of availableLanguages ??
						Object.values(LanguageEnum)"
						:language="language"
						class="text-brown-700"
					/>
				</div>
			</div>
		</div>

		<!-- Mobile menu -->
		<div
			class="flex flex-col w-full h-full fixed z-[9999] bg-[#FFC1D3] text-white px-4 inset-0 justify-center"
			v-if="showMenu"
		>
			<div
				class="py-10 relative flex flex-col items-center gap-20 overflow-scroll"
			>
				<div class="flex flex-col gap-8 items-center">
					<!-- Trip Packages dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowTripPackagesMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<p class="font-medium font-inter uppercase">
								{{ t("header_packages") }}
							</p>

							<i
								class="fi fi-rs-angle-down"
								:class="{
									'fi-rs-angle-down': !showTripPackagesMobileDropdown,
									'fi-rs-angle-up': showTripPackagesMobileDropdown,
								}"
							></i>
						</div>

						<transition>
							<div
								v-if="showTripPackagesMobileDropdown"
								class="p-6 bg-white rounded-lg flex flex-col gap-6 items-center"
							>
								<p
									v-for="tripPackage of tripPackages"
									@click="openTripPackage(tripPackage.slug)"
									class="text-base text-brown-700 font-medium cursor-pointer hover:(text-blue-500)"
								>
									{{ tripPackage.title[locale] }}
								</p>
							</div>
						</transition>
					</div>

					<!-- Attractions dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowAttractionsMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<p class="font-medium font-inter uppercase">
								{{ t("header_attractions") }}
							</p>

							<i
								class="fi fi-rs-angle-down"
								:class="{
									'fi-rs-angle-down': !showAttractionsMobileDropdown,
									'fi-rs-angle-up': showAttractionsMobileDropdown,
								}"
							></i>
						</div>

						<transition>
							<div
								v-if="showAttractionsMobileDropdown"
								class="p-6 bg-white rounded-lg flex flex-col gap-5 items-start"
							>
								<div v-for="category of filteredCategories">
									<p
										@click="() => onAttractionCategorySelect(category)"
										class="text-base text-brown-700 font-medium cursor-pointer hover:(text-blue-500)"
										:class="{
											'!text-pink-600 font-bold':
												category.id === currentAttractionCategorySelected?.id,
										}"
									>
										{{ category.title[locale] }}

										<i
											class="fi ml-1"
											:class="{
												'fi-rs-angle-down':
													currentAttractionCategorySelected?.id === category.id,
												'fi-rs-angle-right':
													currentAttractionCategorySelected?.id !== category.id,
											}"
										></i>
									</p>

									<transition>
										<div
											v-if="
												currentAttractionCategorySelected?.id === category.id
											"
											class="flex flex-col gap-1 mt-2 ml-2"
										>
											<p
												v-for="attraction of currentAttractions"
												@click="openAttraction(attraction.slug)"
												class="text-base text-brown-700 font-medium cursor-pointer hover:(text-blue-500)"
											>
												{{ attraction.title[locale] }}
											</p>
										</div>
									</transition>
								</div>
							</div>
						</transition>
					</div>

					<!-- Relocation dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowRelocationMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<p class="font-medium font-inter uppercase">
								{{ t("header_relocation") }}
							</p>

							<i
								class="fi fi-rs-angle-down"
								:class="{
									'fi-rs-angle-down': !showRelocationMobileDropdown,
									'fi-rs-angle-up': showRelocationMobileDropdown,
								}"
							></i>
						</div>

						<transition>
							<div
								v-if="showRelocationMobileDropdown"
								class="p-6 bg-white rounded-lg flex flex-col gap-6 items-center"
							>
								<p
									v-for="relocationEvent of relocationEvents"
									@click="openAttraction(relocationEvent.slug)"
									class="text-base text-brown-700 font-medium cursor-pointer hover:(text-blue-500)"
								>
									{{ relocationEvent.title[locale] }}
								</p>
							</div>
						</transition>
					</div>

					<div class="flex gap-3 cursor-pointer">
						<p @click="openBlog" class="font-medium font-inter uppercase">
							{{ t("header_travel_blog") }}
						</p>

						<i class="fi fi-sr-share-square"></i>
					</div>

					<div class="flex gap-3 cursor-pointer">
						<button
							@click="scrollToId(CONTACT_SECTION)"
							class="font-medium font-inter uppercase"
						>
							{{ t("header_contact_us") }}
						</button>

						<i class="fi fi-sr-share-square"></i>
					</div>

					<div class="flex gap-3 cursor-pointer">
						<p @click="openWhyUs" class="font-medium font-inter uppercase">
							{{ t("header_why_us") }}
						</p>

						<i class="fi fi-sr-share-square"></i>
					</div>

					<!-- Currencies dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowCurrenciesMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<p class="font-medium font-inter uppercase">
								{{ getCurrencyName(currentCurrency) }}
							</p>

							<i
								class="fi fi-rs-angle-down"
								:class="{
									'fi-rs-angle-down': !showCurrenciesMobileDropdown,
									'fi-rs-angle-up': showCurrenciesMobileDropdown,
								}"
							></i>
						</div>

						<transition>
							<div
								v-if="showCurrenciesMobileDropdown"
								class="p-6 bg-white rounded-lg flex flex-col gap-6"
							>
								<p
									class="text-black uppercase font-inter font-medium text-normal cursor-pointer duration-[.2s] hover:(text-blue-500)"
									v-for="currency of Object.keys(tripPackageCurrencies)"
									@click="changeCurrentCurrency(currency as Currency)"
								>
									{{ getCurrencyName(currency as Currency) }}
								</p>
							</div>
						</transition>
					</div>

					<!-- Languages dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowLanguagesMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<LanguageFlag
								class="text-white pointer-events-none"
								:language="localeToLanguage[locale as keyof typeof localeToLanguage]"
							/>

							<i
								class="fi fi-rs-angle-down"
								:class="{
									'fi-rs-angle-down': !showLanguagesMobileDropdown,
									'fi-rs-angle-up': showLanguagesMobileDropdown,
								}"
							></i>
						</div>

						<transition>
							<div
								v-if="showLanguagesMobileDropdown"
								class="p-6 bg-white rounded-lg flex flex-col gap-6"
							>
								<LanguageFlag
									v-for="language of availableLanguages ??
									Object.values(LanguageEnum)"
									:language="language"
									class="text-brown-700"
								/>
							</div>
						</transition>
					</div>
				</div>

				<SocialMedias class="flex items-center gap-6 justify-center" />

				<button
					class="w-8 h-8 bg-white rounded-full flex items-center justify-center p-2"
					@click="showMenu = false"
				>
					<img :src="CROSS_SVG" alt="" class="w-4" />
				</button>
			</div>
		</div>
	</header>
</template>

<script lang="ts" setup>
import {
	ATTRACTION_ROUTE,
	BLOG_ROUTE,
	CONTACT_SECTION,
	CROSS_SVG,
	HOME_ROUTE,
	LOGO_SVG,
	LOGO_WHITE_SVG,
	MENU_SVG,
	TRIP_PACKAGE_ROUTE,
	WHY_US_ROUTE,
} from "~/constants"
import { localeToLanguage, tripPackageCurrencies } from "~/data"
import {
	LanguageEnum,
	type Attraction,
	type AttractionCategory,
	type Currency,
	type TripPackage,
} from "~/models"

// General
const props = defineProps<{
	withLogo?: boolean
	availableLanguages?: LanguageEnum[]
}>()

const tripPackagesStore = useTripPackagesStore()
const attractionsStore = useAttractionsStore()
const attractionsCategoriesStore = useAttractionsCategoriesStore()
const currenciesStore = useCurrenciesStore()

// Mobile dropdowns
const showLanguagesMobileDropdown = ref(false)
const showAttractionsMobileDropdown = ref(false)
const showTripPackagesMobileDropdown = ref(false)
const showRelocationMobileDropdown = ref(false)
const showCurrenciesMobileDropdown = ref(false)

const closeAllDropdowns = () => {
	showLanguagesMobileDropdown.value = false
	showAttractionsMobileDropdown.value = false
	showTripPackagesMobileDropdown.value = false
	showRelocationMobileDropdown.value = false
	showCurrenciesMobileDropdown.value = false
}

const toogleShowLanguagesMobileDropdown = () => {
	const currentValue = showLanguagesMobileDropdown.value

	closeAllDropdowns()

	showLanguagesMobileDropdown.value = !currentValue
}
const toogleShowAttractionsMobileDropdown = () => {
	const currentValue = showAttractionsMobileDropdown.value

	closeAllDropdowns()

	showAttractionsMobileDropdown.value = !currentValue
}
const toogleShowTripPackagesMobileDropdown = () => {
	const currentValue = showTripPackagesMobileDropdown.value

	closeAllDropdowns()

	showTripPackagesMobileDropdown.value = !currentValue
}
const toogleShowRelocationMobileDropdown = () => {
	const currentValue = showRelocationMobileDropdown.value

	closeAllDropdowns()

	showRelocationMobileDropdown.value = !currentValue
}
const toogleShowCurrenciesMobileDropdown = () => {
	const currentValue = showCurrenciesMobileDropdown.value

	closeAllDropdowns()

	showCurrenciesMobileDropdown.value = !currentValue
}

// Trip Packages
const tripPackages = computed(() =>
	filterTripPackagesToShow(tripPackagesStore.tripPackages, locale.value)
)
const currentTripPackageSelected = ref<TripPackage>()

const onTripPackageHover = (data: TripPackage) => {
	currentTripPackageSelected.value = data
}

// Attractions
const { categories } = storeToRefs(attractionsCategoriesStore)
const { attractions } = storeToRefs(attractionsStore)

const filteredAttractions = computed(() => {
	return filterAttractionsToShow(attractions.value, locale.value)
})
const filteredCategories = computed(() => {
	const presentCategories = new Set(
		filteredAttractions.value.map((i) => i.attraction_category_id)
	)

	return categories.value.filter((i) =>
		Array.from(presentCategories).includes(i.id)
	)
})

const currentAttractionCategorySelected = ref<AttractionCategory>()
const currentAttractions = ref<Attraction[]>([])
const currentAttractionSelected = ref<Attraction>()

const onAttractionCategorySelect = (data: AttractionCategory) => {
	if (currentAttractionCategorySelected.value === data) return

	currentAttractionCategorySelected.value = data

	try {
		const res = filteredAttractions.value.filter(
			(i) => i.attraction_category_id === data.id && !i.is_relocation
		)

		currentAttractions.value = res
		currentAttractionSelected.value = res.length > 0 ? res[0] : undefined
	} catch (error) {
		console.error(error)
	}
}
const onAttractionHover = (data: Attraction) => {
	currentAttractionSelected.value = data
}

// Relocation
const currentRelocationEventSelected = ref<Attraction>()
const relocationEvents = computed(() => {
	return attractions.value.filter((i) => i.is_relocation)
})

const onRelocationEventHover = (data: Attraction) => {
	currentRelocationEventSelected.value = data
}

// Currencies
const { currentCurrency } = storeToRefs(currenciesStore)

const getCurrencyName = (data: Currency) => {
	return `${tripPackageCurrencies[data].acronym}(${tripPackageCurrencies[data].symbol})`
}
const changeCurrentCurrency = (newCurreny: Currency) => {
	currenciesStore.changeCurrentCurrency(newCurreny)
}

// Locales
const { locale, t } = useI18n()
const localePath = useLocalePath()

// Scroll
const scrollToId = (id: string) => {
	var el = document.getElementById(id)

	if (!el) return

	showMenu.value = false
	window.scrollTo(el.offsetLeft, el.offsetTop)
}

// Listeners
const showMenu = ref(false)
const paintHeaderBg = ref(false)
const showLogo = ref(false)

const resizeEventName = "resize"
const scrollEventName = "scroll"

const handleResize = () => {
	if (window.innerWidth > 1280) {
		showMenu.value = false
	}
}
const handleScroll = () => {
	if ((window?.scrollY ?? 0) > 200) {
		paintHeaderBg.value = true

		!props.withLogo && (showLogo.value = true)
	} else {
		paintHeaderBg.value = false

		!props.withLogo && (showLogo.value = false)
	}
}

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
const openWhyUs = () => navigateTo(localePath(WHY_US_ROUTE))
const openBlog = () => navigateTo(localePath(BLOG_ROUTE))
const openAttraction = (slug: string) => {
	navigateTo(localePath(ATTRACTION_ROUTE(slug)))
}
const openTripPackage = (slug: string) => {
	navigateTo(localePath(TRIP_PACKAGE_ROUTE(slug)))
}

// Watchers
watch(tripPackages, (data) => {
	if (data.length === 0) return

	onTripPackageHover(data[0])
})

watch(relocationEvents, (data) => {
	if (data.length === 0) return

	onRelocationEventHover(relocationEvents.value[0])
})

watch(
	() => categories.value.length + attractions.value.length,
	async (_) => {
		if (categories.value.length === 0 || attractions.value.length === 0) return

		onAttractionCategorySelect(categories.value[0])
	}
)

// Life cycle
onMounted(() => {
	window.addEventListener(resizeEventName, handleResize)
	window.addEventListener(scrollEventName, handleScroll)

	if (props.withLogo) showLogo.value = true

	// Dropdowns data
	onTripPackageHover(tripPackages.value[0])
	onRelocationEventHover(relocationEvents.value[0])
	onAttractionCategorySelect(categories.value[0])
})

onUnmounted(() => {
	window.removeEventListener(resizeEventName, handleResize)
	window.removeEventListener(scrollEventName, handleScroll)
})
</script>
