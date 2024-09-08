<template>
	<section
		:id="CONTACT_SECTION"
		class="relative flex items-center lg:items-stretch gap-16 lg:gap-16 xl:gap-24 justify-center py-16 sm:py-20 md:py-[100px] px-6 flex-col lg:flex-row"
	>
		<img
			:src="FLOWER_RIGHT1_SVG"
			alt="Flower"
			class="absolute top-0 -left-5 xl:left-15 -z-10"
		/>

		<BaseForm
			:validation-schema="contactSchema"
			@submit="onSubmit"
			reset-on-submit
			data-aos="fade-right"
			data-aos-offset="-300"
			data-aos-duration="800"
			class="flex flex-col bg-white w-full max-w-[768px] lg:max-w-[529px] rounded-xl shadow-md px-6 py-12 pb-8 sm:p-[52px] gap-8 sm:gap-[52px]"
		>
			<span
				class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
			>
				{{ t("contact.title") }}
			</span>

			<div class="flex flex-col gap-6 my-12">
				<TextField name="name" placeholder="Name" />
				<TextField name="email" placeholder="E-mail" />

				<div class="flex flex-col gap-3 sm:pl-4 pt-[9px] pb-8">
					<span
						class="font-inter text-[20px] sm:text-[24px] text-brown-700 mb-2"
					>
						{{ t("contact.interestedInPark") }}
					</span>

					<div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
						<CheckboxField
							v-for="tripPackage in tripPackages"
							name="tripPackages"
							:value="tripPackage.id"
						>
							{{ tripPackage.title[locale] }}
						</CheckboxField>

						<CheckboxField name="tripPackages" value="Other">
							Other
						</CheckboxField>
					</div>
				</div>

				<TextAreaField name="message" placeholder="Message" />
			</div>

			<Loading v-if="loadingContact" />
			<button v-else type="submit" class="btn-primary">
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
import { CONTACT_SECTION, FLOWER_RIGHT1_SVG } from "~/constants"
import { contactSchema, type ContactSchemaSubmit } from "../formSchemas"

// General
const contactsStore = useContactsStore()
const tripPackagesStore = useTripPackagesStore()

// Trip Packages
const { tripPackages } = storeToRefs(tripPackagesStore)

// Locales
const { t, locale } = useI18n()

// Form
const { loadingContact } = storeToRefs(contactsStore)

const onSubmit = async (data: ContactSchemaSubmit) => {
	try {
		await contactsStore.createContact(
			data.name,
			data.email,
			data.message,
			data.tripPackages
		)
	} catch (error) {
		console.error(error)
	}
}
</script>
