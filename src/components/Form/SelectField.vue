<!-- <template>
	<BaseField :name="name" :label="label">
		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<Field
				:name="name"
				:value="initialValue"
				as="select"
				@change="onChange"
				class="text-base w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			>
				<slot />
			</Field>
		</div>
	</BaseField>
</template> -->
<template>
	<BaseField :name="name" :label="label">
		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<select
				:name="name"
				v-model="value"
				@change="onChange"
				class="text-base w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			>
				<slot />
			</select>
		</div>
	</BaseField>
</template>

<script lang="ts" setup>
import { useField } from "vee-validate"

const props = defineProps<{
	name: string
	label?: string
	value?: string
}>()

const emits = defineEmits<{
	(e: "change", data: string): void
}>()

// Field
const { value, handleChange } = useField(props.name)

const onChange = (e: any) => emits("change", e.target.value)

// Watchers
watch(
	() => props.value,
	(newValue) => {
		if (!newValue) return

		handleChange(newValue)
	},
	{ immediate: true }
)
</script>
