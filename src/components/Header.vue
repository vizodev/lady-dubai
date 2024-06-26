<template>
  <header
    class="flex w-full justify-between md:justify-end items-center absolute top-0 z-10 px-4 sm:px-[40px] lg:px-[100px] h-[75px]"
    :class="{
      'bg-[#FFC1D3] shadow-md md:!bg-transparent md:shadow-none':
        !paintHeaderBg,
      'bg-[#FFC1D3] !shadow-md': paintHeaderBg,
    }"
  >
    <img src="~/assets/imgs/logo-white.svg" alt="" class="h-[40px] md:hidden" />
    <button class="md:hidden" @click="showMenu = true">
      <img src="~/assets/imgs/menu.svg" alt="" />
    </button>
    <div class="md:flex items-center gap-[72px] text-white hidden">
      <a class="font-medium font-inter uppercase" href="">Why Us</a>
      <a class="font-medium font-inter uppercase" href="">Travel Blog</a>
      <div class="flex items-center gap-3">
        <div class="w-[27px] h-4 rounded-sm bg-white"></div>
        <span class="uppercase text-xs font-inter font-medium">English</span>
      </div>
    </div>
    <div
      class="flex flex-col w-full h-full fixed z-[9999] bg-[#FFC1D3] text-white px-4 inset-0 justify-center py-10"
      v-if="showMenu"
    >
      <div class="relative flex flex-col items-center gap-20">
        <div class="flex flex-col gap-8 items-center">
          <a class="font-medium font-inter uppercase" href="">Why Us</a>
          <a class="font-medium font-inter uppercase" href="">Travel Blog</a>
          <div class="flex items-center gap-3">
            <div class="w-[27px] h-4 rounded-sm bg-white"></div>
            <span class="uppercase text-xs font-inter font-medium">
              English
            </span>
          </div>
        </div>
        <div class="flex items-center gap-6 justify-center">
          <button class="">
            <img src="~/assets/imgs/facebook-icon.svg" alt="" />
          </button>
          <button class="">
            <img src="~/assets/imgs/tiktok-icon.svg" alt="" />
          </button>
          <button class="">
            <img src="~/assets/imgs/instagram-icon.svg" alt="" />
          </button>
        </div>
        <button
          class="w-8 h-8 bg-white rounded-full flex items-center justify-center"
          @click="showMenu = false"
        >
          <img src="~/assets/imgs/cross.svg" alt="" class="w-4" />
        </button>
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
const showMenu = ref(false);
const paintHeaderBg = ref(false);
const scrollArea = ref<HTMLElement | null>(null);

onMounted(() => {
  window.addEventListener("resize", () => {
    if (window.innerWidth > 767) {
      showMenu.value = false;
    }
  });

  scrollArea.value = document.getElementById("scrollArea");

  scrollArea.value?.addEventListener("scroll", () => {
    console.log(scrollArea.value?.scrollTop);
    if ((scrollArea.value?.scrollTop ?? 0) > 200) {
      paintHeaderBg.value = true;
    } else {
      paintHeaderBg.value = false;
    }
  });
});

onUnmounted(() => {
  window.removeEventListener("resize", () => {
    if (window.innerWidth > 767) {
      showMenu.value = false;
    }
  });
});
</script>
