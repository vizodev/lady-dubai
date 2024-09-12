<template>
	<header
		class="flex w-full justify-between items-center fixed top-0 z-10 px-4 sm:px-[40px] lg:px-[100px] h-[75px] z-100"
		:class="{
			'bg-[#FFC1D3] shadow-md xl:(bg-transparent shadow-none)': !paintHeaderBg,
			'bg-[#FFC1D3] !shadow-md': paintHeaderBg,
			'xl:justify-end': !props.withLogo && !paintHeaderBg,
		}"
	>
		<img
			:src="showLogo && !paintHeaderBg ? LOGO_SVG : LOGO_WHITE_SVG"
			@click="openHome"
			alt="logo"
			class="h-[40px] cursor-pointer"
			:class="{
				'xl:hidden': !showLogo,
			}"
		/>

		<button class="xl:hidden" @click="showMenu = true">
			<img :src="MENU_SVG" alt="" />
		</button>

		<!-- Desktop menu -->
		<div class="xl:flex items-center gap-[72px] text-white hidden">
			<a class="font-medium font-inter uppercase" href="">{{
				t("header.whyUs")
			}}</a>

			<a class="font-medium font-inter uppercase" href="">{{
				t("header.travelBlog")
			}}</a>

			<!-- Attractions dropdown -->
			<div class="dropdown-box group">
				<div class="flex gap-3">
					<p class="font-medium font-inter uppercase">
						{{ t("header.attractions") }}
					</p>

					<i class="fi fi-rs-angle-down"></i>
				</div>

				<div class="dropdown-content flex-col gap-6 group-hover:flex">
					<div class="flex gap-8 items-center">
						<img
							:src="currentAttractionHovered?.banner ?? attractions[0]?.banner"
							class="w-64 object-contain lg:(w-96 h-64)"
						/>

						<div class="flex flex-col gap-6">
							<p
								v-for="attraction of attractions"
								@mouseenter="() => onAttractionHover(attraction)"
								@click="openAttraction(attraction.slug)"
								class="text-base uppercase text-brown-700 font-medium hover:(text-blue-500)"
							>
								{{ attraction.title[locale] }}
							</p>
						</div>
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
				{{ t("header.contactUs") }}
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
					<a class="font-medium font-inter uppercase" href="">{{
						t("header.whyUs")
					}}</a>

					<a class="font-medium font-inter uppercase" href="">{{
						t("header.travelBlog")
					}}</a>

					<!-- Attractions dropdown -->
					<div class="flex flex-col gap-3 items-center">
						<div
							@click="toogleShowAttractionsMobileDropdown"
							class="flex gap-3 cursor-pointer"
						>
							<p class="font-medium font-inter uppercase">
								{{ t("header.attractions") }}
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
								class="p-6 bg-white rounded-lg flex flex-col gap-6"
							>
								<p
									v-for="attraction of attractions"
									@click="openAttraction(attraction.slug)"
									class="text-base text-brown-700 font-medium cursor-pointer hover:(text-blue-500)"
								>
									{{ attraction.title[locale] }}
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
						{{ t("header.contactUs") }}
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
	CONTACT_SECTION,
	CROSS_SVG,
	HOME_ROUTE,
	LOGO_SVG,
	LOGO_WHITE_SVG,
	MENU_SVG,
} from "~/constants"
import { localeToLanguage } from "~/data"
import { LanguageEnum, type Attraction } from "~/models"

// General
const props = defineProps<{
	withLogo?: boolean
}>()

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
const attractionsStore = useAttractionsStore()
const { attractions } = storeToRefs(attractionsStore)

const currentAttractionHovered = ref<Attraction>()

const onAttractionHover = (data: Attraction) => {
	currentAttractionHovered.value = data
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

		if (!props.withLogo) showLogo.value = true
	} else {
		paintHeaderBg.value = false

		if (!props.withLogo) showLogo.value = false
	}
}

// Routes
const openHome = () => navigateTo(localePath(HOME_ROUTE))
const openAttraction = (slug: string) => {
	navigateTo(localePath(ATTRACTION_ROUTE(slug)))
}

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
