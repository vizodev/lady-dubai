<template>
	<div
		class="flex flex-col gap-8 sm:gap-12 md:gap-16 items-start md:py-[52px] px-0 w-full max-w-[768px] lg:max-w-max"
	>
		<div class="flex flex-col gap-3 items-start">
			<span
				class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
			>
				{{ t("whatsapp.title") }}
			</span>
			<span class="text-[20px] sm:text-[24px] font-roboto-serif leading-tight">
				{{ t("whatsapp.description") }}
			</span>
		</div>
		<button class="btn-primary">
			<div class="w-max flex gap-3">
				<i class="fi fi-brands-whatsapp"> </i>

				<p class="text-center">{{ t("whatsapp.button") }}</p>
			</div>
		</button>
	</div>
</template>

<script setup lang="ts">
// Locales
const { t } = useI18n()
</script>
