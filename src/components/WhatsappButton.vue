<template>
	<div
		v-if="showContact"
		class="group fixed bottom-[80px] animate-bounce hover:animate-none transition-all duration-[.2s] z-50 bottom-10 right-5 md:(right-10 bottom-15) lg:(right-20 bottom-20)"
	>
		<button
			class="flex gap-4 items-center justify-center bg-[#21B65A] rounded-full text-white text-[24px] customShadow w-[52px] h-[52px] group-hover:(w-auto px-6)"
		>
			<p class="text-base font-inter font-bold hidden group-hover:block">
				{{ t("whatsapp_button") }}
			</p>

			<i class="fi fi-brands-whatsapp"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
// Locales
const { t } = useI18n()

// Contact
const showContact = ref(false)

// Listeners
const scrollEventName = "scroll"
const handleScroll = () => {
	if (window.scrollY > 150) {
		showContact.value = true
	} else {
		showContact.value = false
	}
}

// Life cycle
onMounted(() => {
	window.addEventListener(scrollEventName, handleScroll)
})

onUnmounted(() => {
	window.removeEventListener(scrollEventName, handleScroll)
})
</script>
