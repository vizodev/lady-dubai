<template>
	<div class="text-[16px] text-pink-600 flex gap-3 cursor-pointer mb-6 w-max">
		<i class="fi fi-ss-angle-double-left"></i>

		<p>{{ t("checkout_return") }}</p>
	</div>
</template>

<script setup lang="ts">
// Locales
const { t } = useI18n()
</script>
