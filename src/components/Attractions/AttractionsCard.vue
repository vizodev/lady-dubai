<template>
	<div class="w-full flex flex-col">
		<div class="w-full h-[286px]">
			<img :src="BANNER3_IMAGE" alt="" class="w-full h-full object-cover" />
		</div>
		<div class="flex flex-col py-6 px-4 sm:p-6 gap-3.5">
			<span class="text-[20px] font-medium leading-tight font-inter">
				Dubai Fountain Lights Show
			</span>
			<div class="flex flex-col items-start gap-3.5">
				<span class="text-[14px] leading-tight font-medium font-inter">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quae
					eveniet debitis quisquam earum reiciendis placeat? Doloremque eos
					excepturi blanditiis, similique provident maiores id natus, modi, amet
					libero possimus ullam.
				</span>
				<button
					@click="goToAttraction"
					class="uppercase text-pink-600 text-[12px] leading-tight font-semibold font-inter"
				>
					learn more
				</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ATTRACTION_ROUTE, BANNER3_IMAGE } from "~/constants"

const goToAttraction = () => {
	navigateTo(ATTRACTION_ROUTE(handleRandomId()))
}
</script>
