<template>
	<div
		v-if="showContact"
		class="fixed bottom-[80px] right-20 animate-bounce hover:animate-none transition-all duration-[.2s] z-50"
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
