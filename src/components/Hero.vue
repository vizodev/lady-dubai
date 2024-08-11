<template>
	<div
		class="flex flex-col min-h-[720px] !bg-cover !bg-center !bg-no-repeat w-full h-[100vh] md:pt-[75px] relative"
		:style="{
			background: `url(${currentBackground}) `,
			transition: 'background-image 1.5s ease-in-out',
		}"
	>
		<div
			class="absolute inset-0 w-full h-full bg-[#5E6567] mix-blend-hard-light"
		></div>
		<div
			class="flex flex-col pl-[6%] 2xl:pl-[12.96875%] items-start gap-[70px] lg:gap-[80px] xl:gap-[100px] relative z-1"
		>
			<div class="w-[250px] hidden md:block">
				<img :src="LOGO_SVG" alt="Logo" class="w-full" />
			</div>

			<div
				class="flex flex-col text-white gap-12 items-start pt-[145px] md:pt-0"
			>
				<div class="flex flex-col gap-4">
					<div class="flex flex-col">
						<span
							class="text-[40px] sm:text-[60px] xl:text-[80px] leading-[1.09] -tracking-[0.02] font-bold font-roboto-serif text-light"
						>
							Woman-only
						</span>
						<span
							class="text-[40px] sm:text-[60px] xl:text-[80px] leading-[1.09] -tracking-[0.02] font-roboto-serif text-light"
						>
							Travel Packages <br />
							to Dubai
						</span>
					</div>
					<div class="flex flex-col">
						<p class="font-inter sm:text-[20px] xl:text-[24px] text-light">
							Enjoy the attractions of Dubai and the UAE in a
							<br class="hidden sm:block" />
							<b>safe, gender-oriented, women-exclusive tour.</b>
						</p>
					</div>
				</div>
				<button
					class="text-white sm:text-[18px] xl:text-[20px] 2xl:text-[24px] font-inter font-bold tracking-[0.02] bg-pink-500 px-5 xl:px-6 py-2.5 xl:py-3 rounded-xl btnShadow"
				>
					Book your Trip
				</button>
			</div>
		</div>
		<div
			class="flex flex-col absolute bottom-[121px] right-[40px] xl:right-[76px] gap-[28px]"
		>
			<button class="">
				<img :src="FACEBOOK_ICON_SVG" alt="" />
			</button>
			<button class="">
				<img :src="TIKTOK_ICON_SVG" alt="" />
			</button>
			<button class="">
				<img :src="INSTAGRAM_ICON_SVG" alt="" />
			</button>
		</div>
		<span
			class="absolute bottom-[28px] right-[40px] xl:right-[82px] text-pink-100 font-inter font-medium"
		>
			The Dubai Experience
		</span>
	</div>
</template>

<script lang="ts" setup>
import {
	FACEBOOK_ICON_SVG,
	INSTAGRAM_ICON_SVG,
	TIKTOK_ICON_SVG,
	LOGO_SVG,
} from "~/constants"

const state = reactive<{
	currentHeroIndex: number
	availableHeroes: { src: string }[]
	changeBgIntervalTime: number
	changeBgInterval?: any
}>({
	currentHeroIndex: 0,
	availableHeroes: [
		{
			src: "/hero1.png",
		},
		{
			src: "/hero2.jpg",
		},
		{
			src: "/hero3.jpg",
		},
		{
			src: "/hero4.png",
		},
		{
			src: "/hero5.jpg",
		},
		{
			src: "/hero6.jpg",
		},
		{
			src: "/hero7.png",
		},
		{
			src: "/hero8.png",
		},
	],
	changeBgIntervalTime: 3000,
	changeBgInterval: null,
})

onBeforeMount(() => {
	startChangeBackground()
})

// onBeforeUnmount(() => {
//   clearInterval(state.changeBgInterval);
// });

const currentBackground = computed(() => {
	return state.availableHeroes[state.currentHeroIndex].src
})

const startChangeBackground = () => {
	state.changeBgInterval = setInterval(() => {
		changeBackground()
	}, state.changeBgIntervalTime)
}

const changeBackground = () => {
	if (state.currentHeroIndex + 1 === state.availableHeroes.length) {
		state.currentHeroIndex = 0
	} else {
		state.currentHeroIndex++
	}
}
</script>

<style scoped>
.text-light {
	text-shadow: 0 4px 12px rgba(51, 0, 69, 0.5), 0 2px 0 rgba(0, 0, 0, 0.25);
}

.btnShadow {
	box-shadow: 0 4px 12px rgba(51, 0, 69, 0.5), 0 2px 0 rgba(0, 0, 0, 0.25);
}
</style>
