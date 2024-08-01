<template>
	<div class="fixed inset-0 flex flex-col w-full">
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<style>
/* Default <Transition /> */
.v-enter-active,
.v-leave-active {
	transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
	opacity: 0;
}
</style>
