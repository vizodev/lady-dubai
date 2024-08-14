<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-1.5">
		<div class="w-full" v-for="_ in attractions">
			<AttractionsCard />
		</div>
	</div>
</template>

<script lang="ts" setup>
const attractions = ref<number[]>([])

// Life cycle
onMounted(() => {
	attractions.value = [...Array.from({ length: 5 }).keys()]
})
</script>
