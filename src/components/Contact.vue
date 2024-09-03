<template>
	<section
		:id="CONTACT_SECTION"
		class="flex items-center lg:items-stretch gap-16 lg:gap-16 xl:gap-24 justify-center py-16 sm:py-20 md:py-[100px] px-6 flex-col lg:flex-row"
	>
		<BaseForm
			:validation-schema="contactSchema"
			@submit="onSubmit"
			data-aos="fade-right"
			data-aos-offset="-300"
			data-aos-duration="800"
			class="relative flex flex-col bg-white w-full max-w-[768px] lg:max-w-[529px] rounded-xl shadow-md px-6 py-12 pb-8 sm:p-[52px] gap-8 sm:gap-[52px]"
		>
			<img
				:src="FLOWER_RIGHT1_SVG"
				alt="Flower"
				class="absolute -top-25 -left-20 -z-10"
			/>

			<span
				class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
			>
				{{ t("contact.title") }}
			</span>

			<div class="flex flex-col gap-6 my-12">
				<TextField name="name" placeholder="Name" />
				<TextField name="email" placeholder="E-mail" />

				<div class="flex flex-col gap-3 sm:px-4 pt-[9px] pb-8">
					<span
						class="font-inter text-[20px] sm:text-[24px] text-brown-700 mb-2"
					>
						{{ t("contact.interestedInPark") }}
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

			<button type="submit" class="btn-primary">
				{{ t("contact.button") }}
			</button>
		</BaseForm>

		<WhatsappBox
			data-aos="fade-left"
			data-aos-offset="-300"
			data-aos-duration="800"
		/>
	</section>
</template>

<script lang="ts" setup>
import { contactSchema, type ContactSchemaSubmit } from "../formSchemas"
import { defaultTripPackages } from "~/data"
import { CONTACT_SECTION, FLOWER_RIGHT1_SVG } from "~/constants"

// Locales
const { t } = useI18n()

// Form
const onSubmit = (data: ContactSchemaSubmit) => {
	console.log(data)
}
</script>
