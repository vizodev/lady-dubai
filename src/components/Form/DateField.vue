<template>
	<BaseField :name="name" :label="label">
		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<input
				:name="name"
				@change="onChange"
				type="date"
				class="w-full text-base font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			/>
		</div>
	</BaseField>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate"

const { name } = defineProps<{
	name: string
	label?: string
}>()

const { handleChange } = useField(name)

const onChange = (e: Event) => {
	const target = e.target as HTMLInputElement

	handleChange(new Date(target.value))
}
</script>
