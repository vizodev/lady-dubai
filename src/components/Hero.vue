<template>
	<div
		class="flex flex-col min-h-[720px] !bg-cover !bg-center !bg-no-repeat w-full h-[100vh] md:pt-[75px] relative"
		:style="{
			background: `url(${currentBackground}) `,
			transition: 'background-image 1.5s ease-in-out',
		}"
	>
		<SidePageIcon :src="PLANE1_SVG" class="top-30 z-10" />
		<SidePageIcon :src="FLOWER_LEFT1_SVG" class="top-40 left-0 z-10" />
		<SidePageIcon :src="PLANE2_SVG" class="top-120 z-10" />

		<div
			class="absolute inset-0 w-full h-full bg-[#5E6567] mix-blend-hard-light"
		></div>

		<div
			class="flex flex-col pl-[12%] 2xl:pl-[12.96875%] items-start gap-[70px] lg:gap-[80px] xl:gap-[100px] relative z-50"
		>
			<div class="w-[250px] hidden xl:block">
				<img :src="LOGO_SVG" alt="Logo" class="w-full" />
			</div>

			<div class="flex flex-col text-white gap-12 items-start pt-24 xl:pt-0">
				<div class="flex flex-col gap-4">
					<div class="flex flex-col">
						<span
							class="text-[40px] sm:text-[60px] xl:text-[80px] !leading-[1.09] -tracking-[0.02] font-bold font-roboto-serif text-light"
						>
							{{ t("hero_title1") }}
						</span>
						<span
							class="text-[40px] sm:text-[60px] xl:text-[80px] !leading-[1.09] -tracking-[0.02] font-roboto-serif text-light"
						>
							{{ t("hero_title2") }} <br />
							{{ t("hero_title3") }}
						</span>
					</div>
					<div class="flex flex-col">
						<p
							class="font-inter sm:text-[20px] xl:text-[24px] text-light !leading-9"
						>
							{{ t("hero_description1") }}
							<br />
							<b>{{ t("hero_description2") }}</b>
						</p>
					</div>
				</div>

				<a
					rel="noopener"
					:href="`#${TRIP_PACKAGES_SECTION}`"
					class="btn-primary"
					>{{ t("hero_button") }}</a
				>
			</div>
		</div>

		<SocialMedias
			class="flex flex-col absolute bottom-[121px] right-[40px] xl:right-[76px] gap-[28px]"
		/>

		<span
			class="absolute bottom-[28px] right-[40px] xl:right-[82px] text-pink-100 font-inter font-medium"
		>
			{{ t("hero_footer") }}
		</span>
	</div>
</template>

<script lang="ts" setup>
import {
	FLOWER_LEFT1_SVG,
	HERO1_IMAGE,
	HERO2_IMAGE,
	HERO3_IMAGE,
	HERO4_IMAGE,
	HERO5_IMAGE,
	HERO6_IMAGE,
	HERO7_IMAGE,
	HERO8_IMAGE,
	LOGO_SVG,
	PLANE1_SVG,
	PLANE2_SVG,
	TRIP_PACKAGES_SECTION,
} from "~/constants"

// Locales
const { t } = useI18n()

// Background
const backgrounds = reactive<{
	currentHeroIndex: number
	availableHeroes: { src: string }[]
	changeBgIntervalTime: number
	changeBgInterval?: any
}>({
	currentHeroIndex: 0,
	availableHeroes: [
		{
			src: HERO1_IMAGE,
		},
		{
			src: HERO2_IMAGE,
		},
		{
			src: HERO3_IMAGE,
		},
		{
			src: HERO4_IMAGE,
		},
		{
			src: HERO5_IMAGE,
		},
		{
			src: HERO6_IMAGE,
		},
		{
			src: HERO7_IMAGE,
		},
		{
			src: HERO8_IMAGE,
		},
	],
	changeBgIntervalTime: 3000,
	changeBgInterval: null,
})
const currentBackground = computed(() => {
	return backgrounds.availableHeroes[backgrounds.currentHeroIndex].src
})

const startChangeBackground = () => {
	backgrounds.changeBgInterval = setInterval(() => {
		changeBackground()
	}, backgrounds.changeBgIntervalTime)
}
const changeBackground = () => {
	if (backgrounds.currentHeroIndex + 1 === backgrounds.availableHeroes.length) {
		backgrounds.currentHeroIndex = 0
	} else {
		backgrounds.currentHeroIndex++
	}
}

// Life cycle
onBeforeMount(() => startChangeBackground())
</script>

<style scoped>
.text-light {
	text-shadow: 0 4px 12px rgba(51, 0, 69, 0.5), 0 2px 0 rgba(0, 0, 0, 0.25);
}

.btnShadow {
	box-shadow: 0 4px 12px rgba(51, 0, 69, 0.5), 0 2px 0 rgba(0, 0, 0, 0.25);
}
</style>
