<script setup lang="ts">
import { Form as VeeForm } from "vee-validate"

defineProps<{
	validationSchema: Record<string, any> | undefined
	initialValues?: any
}>()

const emit = defineEmits<{
	(e: "submit", data: any): void
}>()

const onSubmit = (data: any) => emit("submit", data)
</script>

<template>
	<div>
		<VeeForm
			:validation-schema="validationSchema"
			:initial-values="initialValues"
			@submit="onSubmit"
		>
			<slot />
		</VeeForm>
	</div>
</template>
