<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<style>
* {
	transition: all 0.2s ease-in-out;
	transition: background-color 0.1s ease-in-out;
	transition: box-shadow 0.1s ease-in-out;
}

ol {
	list-style-type: decimal;
}
ul {
	list-style-type: disc;
}
ol,
ul {
	padding-left: 30px;
	line-height: 2;
}

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
