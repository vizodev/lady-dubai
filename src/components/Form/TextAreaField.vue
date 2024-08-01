<template>
	<div>
		<textarea
			:name="props.name"
			:placeholder="placeholder"
			rows="4"
			v-model="value"
			class="w-full font-inter placeholder:font-light placeholder:italic placeholder:text-pink-600 text-brown-700 border border-pink-600 px-4 py-3 rounded-md bg-transparent m-0"
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
	placeholder: string
}>()

// Form
const { value, errorMessage } = useField<string>(props.name)
</script>
