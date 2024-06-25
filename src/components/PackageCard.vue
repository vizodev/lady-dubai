<template>
  <div class="flex flex-col bg-white rounded-xl overflow-hidden customShadow">
    <div class="w-full h-[249px] overflow-scroll hide-scrollbar">
      <img
        v-for="image in tripPackage.banners"
        :src="image"
        alt="Package Image"
        class="w-full h-full object-cover"
      />
    </div>
    <div class="flex flex-col p-8 gap-6">
      <div class="flex flex-col gap-0.5">
        <span class="text-brown-700 text-[36px] font-roboto-serif font-medium">
          {{ tripPackage.title }}
        </span>
        <span class="text-brown-700 text-[14px] font-inter font-medium">
          {{ tripPackage.headline }}
        </span>
      </div>
      <div class="flex flex-wrap gap-5 items-center">
        <span
          class="border border-pink-600 text-pink-600 text-[12px] font-medium font-inter px-1.5 py-1 rounded-md"
          v-for="language in tripPackage.guideLanguages"
        >
          {{ language }}
        </span>
      </div>
      <div class="flex items-end justify-between">
        <div class="flex flex-col gap-1.5">
          <div class="relative w-fit">
            <span class="text-brown-700 font-semibold font-roboto-serif">
              {{ `$ ${tripPackage.downSalePrice.usd}` }}
            </span>
            <div
              class="w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 z-[1] top-[50%] translate-y-[-50%]"
            ></div>
          </div>
          <div class="flex items-center gap-3">
            <span class="text-blue-200 font-bold font-roboto-serif text-[36px]">
              {{ `$ ${tripPackage.price.usd}` }}
            </span>
            <div class="flex flex-col font-inter">
              <span class="text-[12px] font-bold text-blue-200"> DIRHAM </span>
              <span class="text-[10px] font-medium text-blue-200">
                per person
              </span>
            </div>
          </div>
          <span
            class="text-white bg-blue-200 text-[10px] font-bold font-inter w-full rounded-md text-center px-1.5 py-[3.5px] uppercase"
          >
            Limited Time Promotional Price
          </span>
        </div>
        <button
          class="text-white text-[24px] font-inter font-bold tracking-[0.02] bg-pink-500 px-6 py-3 rounded-xl btnShadow"
        >
          See More
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { TripPackage } from "~/models";

const props = defineProps<{
  tripPackage: TripPackage;
}>();
</script>

<style scoped>
.customShadow {
  box-shadow: 0 4px 32px rgb(119, 51, 67, 0.05),
    0 2px 2px rgba(118, 32, 78, 0.15);
}
</style>
