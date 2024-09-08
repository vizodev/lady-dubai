<template>
	<div>
		<p v-if="label" class="text-sm font-bold ml-3">{{ label }}</p>

		<Field
			:name="name"
			:placeholder="placeholder"
			class="w-full text-base font-inter outline-0 placeholder:font-light placeholder:italic focus:border-pink-600 focus:text-pink-600 focus:font-medium text-brown-700 border border-black px-4 py-3 rounded-md bg-transparent"
		/>

		<transition>
			<ErrorMessage
				:name="name"
				class="mt-3 italic text-xs text-red-600 font-bold"
			/>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field } from "vee-validate"

defineProps<{
	name: string
	label?: string
	placeholder?: string
}>()
</script>
