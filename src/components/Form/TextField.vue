<template>
	<BaseField :name="name" :label="label">
		<Field
			:name="name"
			:placeholder="placeholder"
			class="w-full text-base font-inter outline-0 placeholder:font-light placeholder:italic focus:border-pink-600 focus:text-pink-600 focus:font-medium text-brown-700 border border-black px-4 py-3 rounded-md bg-transparent"
		/>
	</BaseField>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate"

defineProps<{
	name: string
	label?: string
	placeholder?: string
}>()
</script>
