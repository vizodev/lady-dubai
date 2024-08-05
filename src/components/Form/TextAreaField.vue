<template>
	<div>
		<textarea
			:name="props.name"
			:placeholder="placeholder"
			rows="4"
			v-model="value"
			class="w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:border-pink-600 focus:text-pink-600 focus:font-medium text-brown-700 border border-black px-4 py-3 rounded-md bg-transparent m-0"
		></textarea>

		<transition>
			<p v-if="errorMessage" class="mt-2 italic text-xs text-red-600 font-bold">
				{{ errorMessage }}
			</p>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate"

const props = defineProps<{
	name: string
	placeholder?: string
}>()

// Form
const { value, errorMessage } = useField<string>(props.name)
</script>
