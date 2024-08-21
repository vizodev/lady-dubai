<template>
	<div class="flex items-start gap-6 sm:gap-8 flex-col lg:flex-row">
		<div class="flex flex-col gap-2 sm:min-w-[600px] 2xl:min-w-[700px] w-full">
			<div class="w-full h-[200px] sm:h-[300px] 2xl:h-[359px]">
				<img
					:src="accommodation.images[0]"
					alt=""
					class="w-full h-full object-cover"
				/>
			</div>
			<div class="flex items-stretch gap-2">
				<div class="w-full h-[120px] sm:h-[171px]">
					<img
						:src="accommodation.images[1]"
						alt=""
						class="w-full h-full object-cover"
					/>
				</div>
				<div class="w-full h-[120px] sm:h-[171px]">
					<img
						:src="accommodation.images[2]"
						alt=""
						class="w-full h-full object-cover"
					/>
				</div>
			</div>
		</div>

		<div class="flex flex-col xl:p-6 gap-8 lg:gap-12">
			<div class="flex flex-col">
				<span
					class="font-roboto-serif font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-tight"
				>
					{{ accommodation.title }}
				</span>
				<span
					class="font-inter font-light leading-none text-[20px] sm:(leading-tight text-[24px])"
				>
					{{ accommodation.subtitle }}
				</span>
			</div>
			<span class="font-light font-inter leading-tight">
				{{ accommodation.description }}
			</span>
			<ul class="m-0 pl-4 w-full list-disc flex flex-col gap-2">
				<li
					v-for="feature of accommodation.features"
					class="font-inter font-medium leading-tight"
				>
					{{ feature }}
				</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import type { Accommodation } from "~/models"

const { data } = defineProps<{
	data: Accommodation[]
}>()

const accommodation = data[0]
</script>
