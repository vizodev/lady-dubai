<template>
	<div class="flex gap-4 font-inter items-center">
		<div class="flex items-center">
			<i
				@click="removePeople"
				class="fi fi-ts-minus-circle"
				:class="{
					'opacity-30': people === 1,
				}"
			></i>

			<p
				class="mx-[6px] text-2xl text-gray-500 border border-black rounded-md py-[6px] px-[14px]"
			>
				{{ people }}
			</p>

			<i @click="addPeople" class="fi fi-ts-add"></i>
		</div>

		<div>
			<p class="text-2xl">{{ title }}</p>

			<p class="text-[12px]">{{ description }}</p>
		</div>
	</div>
</template>

<script setup lang="ts">
const props = defineProps<{
	title: string
	description: string
	currentValue: number
}>()

const emit = defineEmits<{
	(e: "onChange", data: number): void
}>()

// Value
const currentValue = computed(() => props.currentValue)
watch(currentValue, (newValue, _) => {
	people.value = newValue
})

// People
const people = ref(1)

const addPeople = () => people.value++
const removePeople = () => {
	if (people.value == 1) return
	people.value--
}

watch(people, (newPeople) => emit("onChange", newPeople))
</script>

<style scoped>
i {
	display: flex;
	align-items: center;
	font-size: 24px;
	color: rgb(219, 39, 119);
	cursor: pointer;
}
</style>
