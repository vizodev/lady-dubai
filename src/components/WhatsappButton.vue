<template>
	<div
		v-if="showContact"
		class="fixed bottom-[80px] right-20 animate-bounce hover:animate-none transition-all duration-[.2s]"
	>
		<button
			class="flex items-center justify-center bg-[#21B65A] rounded-full w-[52px] h-[52px] text-white text-[24px] customShadow"
		>
			<i class="fi fi-brands-whatsapp"></i>
		</button>
	</div>
</template>

<script setup lang="ts">
const showContact = ref(false)

onMounted(async () => {
	window.addEventListener("scroll", () => {
		if (window.scrollY > 150) {
			showContact.value = true
		} else {
			showContact.value = false
		}
	})
})
</script>
