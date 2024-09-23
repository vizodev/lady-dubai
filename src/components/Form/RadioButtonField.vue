<template>
	<BaseField :name="name">
		<label
			class="flex flex-row items-center gap-3 mb-2 text-regular-14-bold-grey cursor-pointer"
		>
			<Field
				:name="name"
				:value="value"
				type="radio"
				@change="onChange"
				class="cursor-pointer"
			/>

			<slot />
		</label>
	</BaseField>
</template>

<script lang="ts" setup>
import { Field, useField } from "vee-validate"

const { name } = defineProps<{
	name: string
	value: string
}>()

const emit = defineEmits<{
	(e: "onChange", data: string): void
}>()

// Form
const { errorMessage } = useField(name)
const onChange = (e: InputEvent) => {
	const target = e.target as any

	const value = target.value as string
	const checked = target.checked as boolean

	if (checked) emit("onChange", value)
}
</script>

<style scoped>
input[type="radio"] {
	appearance: none;
	background-color: #fff;
	margin: 0;
	font: inherit;
	color: currentColor;
	width: 1.15em;
	height: 1.15em;
	border: 0.09em solid #db2778;
	border-radius: 0.15em;
	transform: translateY(-0.075em);

	display: grid;
	place-content: center;
}

input[type="radio"]::before {
	content: "";
	width: 0.75em;
	height: 0.75em;
	transform: scale(0);
	transition: 120ms transform ease-in-out;
	box-shadow: inset 1em 1em #db2778;
}

input[type="radio"]:checked::before {
	transform: scale(1);
}

label:has(input[type="radio"]:checked) {
	color: #db2778;
}
</style>
