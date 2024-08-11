<template>
	<div class="flex items-start gap-6 sm:gap-8 flex-col lg:flex-row">
		<div class="flex flex-col gap-2 sm:min-w-[600px] 2xl:min-w-[700px] w-full">
			<div class="w-full h-[200px] sm:h-[300px] 2xl:h-[359px]">
				<img :src="BANNER1_IMAGE" alt="" class="w-full h-full object-cover" />
			</div>
			<div class="flex items-stretch gap-2">
				<div class="w-full h-[120px] sm:h-[171px]">
					<img :src="BANNER1_IMAGE" alt="" class="w-full h-full object-cover" />
				</div>
				<div class="w-full h-[120px] sm:h-[171px]">
					<img :src="BANNER1_IMAGE" alt="" class="w-full h-full object-cover" />
				</div>
			</div>
		</div>
		<div class="flex flex-col xl:p-6 gap-8 lg:gap-12">
			<div class="flex flex-col">
				<span
					class="font-roboto-serif font-medium text-[28px] sm:text-[32px] md:text-[36px] leading-tight"
				>
					Accomodation
				</span>
				<span
					class="font-inter font-light leading-none sm:leading-tight text-[20px] sm:text-[24px]"
				>
					Standard Room
				</span>
			</div>
			<span class="font-light font-inter leading-tight">
				Located in a bustling part of Dubai, our hotel room offers a comfortable
				and convenient stay. The room is equipped with a cozy queen-sized bed, a
				functional work desk, and a small seating area. Guests can enjoy
				complimentary Wi-Fi, a flat-screen TV, and a clean, modern bathroom with
				a walk-in shower. Basic amenities such as a mini-fridge, coffee maker,
				and safe are provided to ensure a pleasant experience.
			</span>
			<ul class="m-0 pl-4 w-full list-disc flex flex-col gap-2">
				<li class="font-inter font-medium leading-tight">
					2 Single Beds / 1-2 People
				</li>
				<li class="font-inter font-medium leading-tight">Size 30 Sqm</li>
				<li class="font-inter font-medium leading-tight">High Floor</li>
				<li class="font-inter font-medium leading-tight">
					Partial view to Burj Khalifa
				</li>
				<li class="font-inter font-medium leading-tight">Dubai Canal View</li>
				<li class="font-inter font-medium leading-tight">Adjoining rooms</li>
			</ul>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { BANNER1_IMAGE } from "~/constants"
</script>
