<template>
  <footer class="flex flex-col px-[72px] gap-[52px] py-[65px]">
    <div class="flex items-baseline justify-between px-[9%]">
      <div class="flex flex-col">
        <div class="flex flex-col gap-1.5 text-brown-700">
          <span class="font-inter font-bold uppercase">Customer service</span>
          <span class="font-inter font-light"
            >Available sunday to friday, 10am CT to 16pm CT</span
          >
        </div>
        <div class="flex items-center gap-3">
          <img src="~/assets/imgs/whatsapp-icon.svg" alt="" class="w-6" />
          <span class="font-inter font-medium text-[24px]"
            >+55 813-369-5388</span
          >
        </div>
      </div>
      <div class="flex items-center gap-10">
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
    <div class="flex items-center justify-between px-[9%]">
      <span class="font-inter font-light"
        >LADYDUBAI Copyright © 2024 Lady Dubai. All rights reserved</span
      >
      <span class="font-inter font-light">Privacy Policy</span>
      <span class="font-inter font-light">Terms of Use</span>
      <div class="flex items-center gap-6">
        <LanguageFlag :language="'English'" />
        <LanguageFlag :language="'Hebraic'" />
        <LanguageFlag :language="'Arabic'" />
        <LanguageFlag :language="'Russian'" />
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
