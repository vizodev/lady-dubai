<template>
  <footer class="flex flex-col px-6 lg:px-[72px] gap-8 lg:gap-[52px] py-[65px]">
    <div
      class="flex items-center justify-between px-6 xl:px-[9%] flex-col-reverse md:flex-row gap-8 md:gap-0"
    >
      <div class="flex flex-col gap-2 items-center md:items-start">
        <div
          class="flex flex-col gap-1.5 text-brown-700 items-center md:items-start"
        >
          <span class="font-inter font-bold uppercase">Customer service</span>
          <span class="font-inter font-light"
            >Available sunday to friday, 10am CT to 16pm CT</span
          >
        </div>
        <div class="flex items-center gap-3">
          <img src="~/assets/imgs/whatsapp-icon.svg" alt="" class="w-6" />
          <span class="font-inter font-medium text-[18px] xl:text-[24px]">
            +55 813-369-5388
          </span>
        </div>
      </div>
      <div
        class="flex items-center gap-6 lg:gap-10 flex-col-reverse lg:flex-row"
      >
        <div class="flex items-center gap-[28px]">
          <button class="socialShadow">
            <img src="~/assets/imgs/facebook-icon.svg" alt="" />
          </button>
          <button class="socialShadow">
            <img src="~/assets/imgs/tiktok-icon.svg" alt="" />
          </button>
          <button class="socialShadow">
            <img src="~/assets/imgs/instagram-icon.svg" alt="" />
          </button>
        </div>
        <div class="w-[250px]">
          <img src="~/assets/imgs/logo-footer.svg" alt="Logo" class="w-full" />
        </div>
      </div>
    </div>
    <div class="w-full h-[1px] bg-brown-700"></div>
    <div
      class="flex items-center justify-between px-6 xl:px-[9%] flex-col lg:flex-row gap-4 lg:gap-0"
    >
      <span class="font-inter font-light text-center sm:text-start">
        LADYDUBAI Copyright © 2024 Lady Dubai. All rights reserved
      </span>
      <div class="flex flex-col gap-6 items-center lg:items-end">
        <div class="flex items-center gap-6">
          <a
            href="*"
            class="font-inter font-light hover:text-blue-500 hover:underline transition-all duration-[.2s]"
            >Privacy Policy</a
          >
          <a
            href="*"
            class="font-inter font-light hover:text-blue-500 hover:underline transition-all duration-[.2s]"
            >Terms of Use</a
          >
        </div>
        <div class="flex items-center gap-6 flex-wrap">
          <LanguageFlag :language="'English'" />
          <LanguageFlag :language="'Hebraic'" />
          <LanguageFlag :language="'Arabic'" />
          <LanguageFlag :language="'Russian'" />
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped>
.socialShadow {
  filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.15));
}
</style>
