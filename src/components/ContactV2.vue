<template>
	<div
		class="flex items-center lg:items-stretch gap-16 lg:gap-16 xl:gap-24 justify-center py-16 sm:py-20 md:py-[100px] px-6 flex-col lg:flex-row"
	>
		<BaseForm
			:validation-schema="contactSchema"
			@submit="onSubmit"
			data-aos="fade-right"
			data-aos-offset="-300"
			data-aos-duration="800"
			class="flex flex-col bg-white w-full max-w-[768px] lg:max-w-[529px] rounded-xl shadow-md px-6 py-12 pb-8 sm:p-[52px] gap-8 sm:gap-[52px]"
		>
			<span
				class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
			>
				Send Us a Message
			</span>

			<div class="flex flex-col gap-6 my-12">
				<TextField name="name" placeholder="Name" />
				<TextField name="email" placeholder="E-mail" />

				<div class="flex flex-col gap-3 sm:px-4 pt-[9px] pb-8">
					<span class="font-inter text-[20px] sm:text-[24px] text-brown-700">
						Interested in a specific Pack?
					</span>
					<div class="grid grid-cols-2 gap-4">
						<div
							class="flex flex-col gap-4"
							v-for="tripPackage in defaultTripPackages"
						>
							<CheckboxField name="tripPackages" :value="tripPackage.value">
								{{ tripPackage.title }}
							</CheckboxField>
						</div>
					</div>
				</div>

				<TextAreaField name="message" placeholder="Message" />
			</div>

			<button type="submit" class="btn-primary">Send</button>
		</BaseForm>

		<WhatsappBox
			data-aos="fade-left"
			data-aos-offset="-300"
			data-aos-duration="800"
		/>
	</div>
</template>

<script lang="ts" setup>
import { contactSchema, type ContactSchemaSubmit } from "../formSchemas"

const defaultTripPackages = [
	{
		title: "Dubai Experience",
		value: "dubaiExp",
	},
	{
		title: "Fun Lady",
		value: "funLady",
	},
	{
		title: "Relocation",
		value: "relocation",
	},
	{
		title: "Other",
		value: "other",
	},
]

const onSubmit = (data: ContactSchemaSubmit) => {
	console.log(data)
}
</script>

<style scoped>
.textShadow {
	text-shadow: 0px 0px 6px rgb(43, 6, 52, 0.15), 0 1px 2px rgb(48, 6, 16, 0.25);
}
</style>
