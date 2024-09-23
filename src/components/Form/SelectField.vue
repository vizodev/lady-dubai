<template>
	<BaseField :name="name" :label="label">
		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<Field
				:name="name"
				as="select"
				class="text-base w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			>
				<slot />
			</Field>
		</div>
	</BaseField>
</template>

<script lang="ts" setup>
import { Field } from "vee-validate"

defineProps<{
	name: string
	label?: string
}>()
</script>
