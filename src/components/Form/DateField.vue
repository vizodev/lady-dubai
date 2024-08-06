<template>
	<div>
		<p v-if="label" class="text-sm font-bold ml-3">{{ label }}</p>

		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<input
				:name="name"
				@change="onChange"
				type="date"
				class="w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			/>
		</div>

		<transition>
			<p v-if="errorMessage" class="mt-3 italic text-xs text-red-600 font-bold">
				{{ errorMessage }}
			</p>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate"

const { name } = defineProps<{
	name: string
	label?: string
}>()

const { handleChange, errorMessage } = useField(name)

const onChange = (e: Event) => {
	const target = e.target as HTMLInputElement

	handleChange(new Date(target.value))
}
</script>
