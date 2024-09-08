<script setup lang="ts">
import { Form as VeeForm, type FormActions } from "vee-validate"

const { resetOnSubmit } = defineProps<{
	validationSchema: Record<string, any> | undefined
	initialValues?: any
	resetOnSubmit?: boolean
}>()

// Form
const emit = defineEmits<{
	(e: "submit", data: any): void
}>()

const onSubmit = (data: any, actions: FormActions<any>) => {
	emit("submit", data)

	if (resetOnSubmit) actions.resetForm()
}
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
