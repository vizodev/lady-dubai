<template>
	<div>
		<p v-if="label" class="text-sm font-bold ml-3">{{ label }}</p>

		<div class="focus:border-pink-600 border border-black px-4 py-3 rounded-md">
			<Field
				:name="name"
				as="select"
				class="text-base w-full font-inter outline-0 placeholder:font-light placeholder:italic focus:text-pink-600 focus:font-medium text-brown-700 bg-transparent"
			>
				<slot />
			</Field>
		</div>

		<transition>
			<ErrorMessage
				:name="name"
				class="mt-3 italic text-xs text-red-600 font-bold"
			/>
		</transition>
	</div>
</template>

<script lang="ts" setup>
import { Field, ErrorMessage } from "vee-validate"

defineProps<{
	name: string
	label?: string
}>()
</script>
