<template>
	<BaseField :name="name">
		<Field
			:name="name"
			:placeholder="placeholder"
			as="textarea"
			rows="4"
			class="w-full text-base font-inter outline-0 placeholder:font-light placeholder:italic focus:border-pink-600 focus:text-pink-600 focus:font-medium text-brown-700 border border-black px-4 py-3 rounded-md bg-transparent m-0"
		></Field>
	</BaseField>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate"

defineProps<{
	name: string
	placeholder?: string
}>()
</script>
