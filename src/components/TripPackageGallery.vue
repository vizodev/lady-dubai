<template>
	<div class="relative flex items-center justify-center w-full">
		<div
			class="absolute left-[52px] w-9 h-9 flex items-center justify-center bg-white text-[#A81955] rounded-full"
		>
			<i class="fi fi-sr-angle-left flex"></i>
		</div>
		<div
			class="flex items-center w-full overflow-x-scroll hide-scrollbar gap-2 snap-mandatory snap-x snap-always"
		>
			<div
				class="w-[589px] h-[589px] min-w-[589px] snap-center snap-always"
				v-for="img in gallery"
			>
				<img :src="img" alt="" class="w-full h-full object-cover" />
			</div>
		</div>
		<div
			class="absolute right-[52px] w-9 h-9 flex items-center justify-center bg-white text-[#A81955] rounded-full"
		>
			<i class="fi fi-sr-angle-right flex"></i>
		</div>
	</div>
</template>

<script lang="ts" setup>
defineProps<{
	gallery: string[]
}>()
</script>
