<template>
	<div>
		<p v-if="label" class="text-sm font-bold ml-3">{{ label }}</p>

		<slot />

		<transition>
			<ErrorMessage
				:name="name"
				class="mt-3 italic text-xs text-red-600 font-bold"
			/>
		</transition>
	</div>
</template>

<script setup lang="ts">
import { ErrorMessage } from "vee-validate"

defineProps<{
	name: string
	label?: string
}>()
</script>
