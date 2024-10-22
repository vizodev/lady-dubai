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
			class="cursor-pointer"
			:class="{
				'xl:hidden': !showLogo,
			}"
		>
			<img
				:src="paintHeaderBg ? LOGO_WHITE_SVG : LOGO_SVG"
				@click="openHome"
				alt="logo"
				class="hidden xl:block h-[40px]"
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
		<div class="xl:flex items-center gap-[72px] text-white hidden">
			<NuxtLink :to="WHY_US_ROUTE" class="font-medium font-inter uppercase">{{
				t("header_why_us")
			}}</NuxtLink>

			<NuxtLink :to="BLOG_ROUTE" class="font-medium font-inter uppercase">{{
				t("header_travel_blog")
			}}</NuxtLink>

			<!-- Attractions dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ t("header_attractions") }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content flex-col gap-6 group-hover:flex">
					<div class="flex h-full gap-8">
						<div class="flex flex-col gap-4 self-center">
							<p
								v-for="category of categories"
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
							class="w-60 h-40 object-contain lg:(w-80 h-60)"
						/>
					</div>
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
						v-for="language of Object.values(LanguageEnum)"
						:language="language"
						class="text-brown-700"
					/>
				</div>
			</div>

			<button
				@click="scrollToId(CONTACT_SECTION)"
				class="font-medium font-inter uppercase"
			>
				{{ t("header_contact_us") }}
			</button>
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
					<NuxtLink
						:to="WHY_US_ROUTE"
						class="font-medium font-inter uppercase"
						>{{ t("header_why_us") }}</NuxtLink
					>

					<NuxtLink :to="BLOG_ROUTE" class="font-medium font-inter uppercase">{{
						t("header_travel_blog")
					}}</NuxtLink>

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
								<div v-for="category of categories">
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
									v-for="language of Object.values(LanguageEnum)"
									:language="language"
									class="text-brown-700"
								/>
							</div>
						</transition>
					</div>

					<button
						@click="scrollToId(CONTACT_SECTION)"
						class="font-medium font-inter uppercase"
					>
						{{ t("header_contact_us") }}
					</button>
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
	WHY_US_ROUTE,
} from "~/constants"
import { localeToLanguage } from "~/data"
import {
	LanguageEnum,
	type Attraction,
	type AttractionCategory,
} from "~/models"

// General
const props = defineProps<{
	withLogo?: boolean
}>()

const attractionsStore = useAttractionsStore()
const attractionsCategoriesStore = useAttractionsCategoriesStore()

// Mobile dropdowns
const showLanguagesMobileDropdown = ref(false)
const showAttractionsMobileDropdown = ref(false)

const toogleShowLanguagesMobileDropdown = () => {
	showAttractionsMobileDropdown.value = false
	showLanguagesMobileDropdown.value = !showLanguagesMobileDropdown.value
}
const toogleShowAttractionsMobileDropdown = () => {
	showLanguagesMobileDropdown.value = false
	showAttractionsMobileDropdown.value = !showAttractionsMobileDropdown.value
}

// Attractions
const { categories } = storeToRefs(attractionsCategoriesStore)
const { attractions } = storeToRefs(attractionsStore)

const currentAttractionCategorySelected = ref<AttractionCategory>()
const currentAttractions = ref<Attraction[]>([])
const currentAttractionsLoading = ref(false)
const currentAttractionSelected = ref<Attraction>()

const onAttractionCategorySelect = (data: AttractionCategory) => {
	if (currentAttractionCategorySelected.value === data) return

	currentAttractionCategorySelected.value = data

	try {
		const res = attractions.value.filter(
			(i) => i.attraction_category_id === data.id
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
const openAttraction = (slug: string) => {
	navigateTo(localePath(ATTRACTION_ROUTE(slug)))
}

// Watchers
watch(
	() => categories.value.length + attractions.value.length,
	async (_) => {
		if (categories.value.length === 0 || attractions.value.length === 0) return

		currentAttractionsLoading.value = true

		try {
			currentAttractionCategorySelected.value = categories.value[0]

			const res = attractions.value.filter(
				(i) =>
					i.attraction_category_id ===
					currentAttractionCategorySelected.value!.id
			)
			currentAttractions.value = res
			currentAttractionSelected.value = res.length > 0 ? res[0] : undefined
		} catch (error) {
			console.error(error)
		}

		currentAttractionsLoading.value = false
	}
)

// Life cycle
onMounted(() => {
	window.addEventListener(resizeEventName, handleResize)
	window.addEventListener(scrollEventName, handleScroll)

	if (props.withLogo) showLogo.value = true
})

onUnmounted(() => {
	window.removeEventListener(resizeEventName, handleResize)
	window.removeEventListener(scrollEventName, handleScroll)
})
</script>
