<template>
	<div class="flex flex-col">
		<label
			class="flex flex-row items-center gap-3 mb-2 text-regular-14-bold-grey cursor-pointer"
		>
			<Field
				type="checkbox"
				:name="name"
				:value="value"
				class="cursor-pointer"
			/>
			<slot />
		</label>

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
	value: any
}>()
</script>

<style scoped>
input[type="checkbox"] {
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

input[type="checkbox"]::before {
	content: "";
	width: 0.75em;
	height: 0.75em;
	transform: scale(0);
	transition: 120ms transform ease-in-out;
	box-shadow: inset 1em 1em #db2778;
}

input[type="checkbox"]:checked::before {
	transform: scale(1);
}

label:has(input[type="checkbox"]:checked) {
	color: #db2778;
}
</style>
