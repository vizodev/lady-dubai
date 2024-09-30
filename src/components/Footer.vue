<template>
	<footer class="flex flex-col px-6 lg:px-[72px] gap-8 lg:gap-[52px] py-[65px]">
		<button
			v-if="hasPageScroll"
			@click="scrollToTop"
			class="btn-rounded self-center mb-9"
		>
			<i
				class="fi fi-rr-arrow-small-up flex gap-1 items-center not-italic order flex-row-reverse text-2xl"
			>
				<span class="text-sm">{{ t("footer_back_to_top") }}</span>
			</i>
		</button>

		<div
			class="flex items-center justify-between px-6 xl:px-[9%] flex-col-reverse md:flex-row gap-8 md:gap-0"
		>
			<div class="flex flex-col gap-2 items-center md:items-start">
				<div
					class="flex flex-col gap-1.5 text-brown-700 items-center md:items-start"
				>
					<span class="font-inter font-bold uppercase">{{
						t("footer_customer_service")
					}}</span>
					<span class="font-inter font-light">{{
						t("footer_customer_service_description")
					}}</span>
				</div>
				<div class="flex items-center gap-3">
					<img :src="WHATSAPP_ICON_SVG" alt="" class="w-6" />
					<span class="font-inter font-medium text-[18px] xl:text-[24px]">
						+55 813-369-5388
					</span>
				</div>
			</div>
			<div
				class="flex items-center gap-6 lg:gap-10 flex-col-reverse lg:flex-row"
			>
				<SocialMedias class="flex items-center gap-6" />

				<div class="w-[250px]">
					<img :src="LOGO_FOOTER_SVG" alt="Logo" class="w-full" />
				</div>
			</div>
		</div>

		<Separator />

		<div
			class="flex justify-center md:justify-start gap-6 flex-wrap px-6 xl:px-[9%]"
		>
			<LanguageFlag
				v-for="language of Object.values(LanguageEnum)"
				:language="language"
			/>
		</div>

		<div
			class="flex items-center justify-between px-6 xl:px-[9%] flex-col lg:flex-row gap-4 lg:gap-0"
		>
			<span class="font-inter font-light text-center sm:text-start">
				{{ t("footer_copyright") }}
			</span>

			<div class="flex flex-col gap-6 items-center lg:items-end">
				<div class="flex items-center gap-6">
					<a
						href="*"
						class="font-inter font-light hover:text-blue-500 hover:underline transition-all duration-[.2s]"
						>{{ t("footer_privacy_policy") }}</a
					>
					<a
						href="*"
						class="font-inter font-light hover:text-blue-500 hover:underline transition-all duration-[.2s]"
						>{{ t("footer_terms_of_use") }}</a
					>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts" setup>
import { LOGO_FOOTER_SVG, WHATSAPP_ICON_SVG } from "~/constants"
import { LanguageEnum } from "~/models"

// Scroll
const hasPageScroll = ref(false)

const scrollToTop = () => window.scrollTo(0, 0)

// Listeners
const scrollEventName = "scroll"

const handleScroll = () => {
	if (window.scrollY > 0 && !hasPageScroll.value) {
		hasPageScroll.value = true
	}
}

// Locales
const { t } = useI18n()

// Life cycle
onMounted(() => {
	window.addEventListener(scrollEventName, handleScroll)
})

onUnmounted(() => {
	window.removeEventListener(scrollEventName, handleScroll)
})
</script>

<style scoped>
.socialShadow {
	filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
}
</style>
