<template>
	<div
		class="flex flex-col bg-pink-100 py-16 sm:py-20 px-4 items-center justify-center overflow-hidden"
	>
		<div
			class="flex items-center gap-12 sm:gap-16 xl:gap-[100px] relative px-4 flex-col lg:flex-row"
		>
			<div
				class="absolute bg-[#F5F8FA] w-[110%] h-full rounded-full filter blur-[100px] opacity-50 z-0"
			></div>
			<div
				class="rounded-xl sm:w-[420px] md:w-[500px] 2xl:w-[600px] sm:h-[360px] md:h-[420px] 2xl:h-[489px] border-[14px] border-white transform rotate-[1.98deg] relative z-1"
			>
				<img
					:src="CTA_IMAGE"
					alt=""
					class="w-full h-full object-cover"
					data-aos="flip-right"
					data-aos-offset="-300"
					data-aos-duration="1200"
				/>
			</div>
			<div class="flex flex-col gap-16 sm:gap-[72px] relative z-1">
				<div class="flex flex-col gap-8 items-center lg:items-start">
					<div class="flex flex-col">
						<p
							data-aos="fade-left"
							data-aos-offset="-300"
							class="text-[40px] font-medium font-roboto-serif text-pink-600 !leading-snug text-center sm:(text-[48px]) lg:(text-left text-[52px])"
						>
							{{ t("cta_title1") }} <br class="hidden sm:block" />
							<b>{{ t("cta_title2") }}</b> <br class="hidden sm:block" />
							{{ t("cta_title3") }}
						</p>
					</div>
					<span
						class="font-inter font-light text-brown-700 text-center lg:(text-left)"
					>
						{{ t("cta_description1") }}
						<br class="hidden sm:block" />
						{{ t("cta_description2") }}
					</span>
				</div>
				<div class="flex flex-col gap-3 items-center lg:items-start">
					<button
						class="bg-pink-600 text-white font-bold font-inter text-sm px-3 py-2 rounded-xl"
					>
						{{ t("cta_testemonial_button") }}
					</button>
					<div class="flex items-center gap-3">
						<img :src="YOUTUBE_ICON1_SVG" alt="" class="w-[25px]" />
						<span
							class="text-pink-600 font-medium font-inter text-center lg:text-start"
						>
							{{ t("cta_testemonial_description1") }}
							<b>{{ t("cta_testemonial_description2") }}</b>
							{{ t("cta_testemonial_description3") }}
							<span class="font-extralight italic">{{
								t("company_name")
							}}</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { CTA_IMAGE, YOUTUBE_ICON1_SVG } from "~/constants"

// Locales
const { t } = useI18n()
</script>
