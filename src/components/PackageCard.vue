<template>
  <div class="flex flex-col bg-white rounded-xl overflow-hidden customShadow">
    <div class="relative w-full flex flex-col items-center justify-center">
      <div
        ref="bannerScrollList"
        class="w-full h-[164px] sm:h-[150px] md:h-[180px] lg:h-[249px] overflow-scroll hide-scrollbar snap-mandatory snap-x flex items-center"
        @scroll="calcCurrentBanner()"
      >
        <div
          class="h-full snap-center snap-always w-full bg-cover bg-center bg-no-repeat min-w-full"
          v-for="image in tripPackage.gallery"
          :style="`background-image: url(${image});`"
        ></div>
      </div>
      <div class="absolute bottom-3.5 flex items-center gap-3">
        <button
          class="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-white"
          v-for="(image, index) in tripPackage.gallery"
          :class="{
            'bg-white': index === activeBanner,
            'bg-gray-300': index !== activeBanner,
          }"
          @click="scrollToBanner(index)"
        ></button>
      </div>
    </div>
    <div class="flex flex-col p-5 lg:p-8 gap-6 md:gap-4 lg:gap-6">
      <div class="flex flex-col gap-1 md:gap-0.5">
        <span
          class="text-brown-700 text-[28px] sm:text-[32px] md:text-[36px] font-roboto-serif font-medium leading-tight"
        >
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
      <div
        class="flex 2xl:items-end justify-between flex-col 2xl:flex-row gap-4 2xl:gap-0"
      >
        <div class="flex flex-col lg:gap-1.5">
          <div class="relative w-fit">
            <span class="text-brown-700 font-semibold font-roboto-serif">
              {{ `$ ${tripPackage.downSalePrice.usd}` }}
            </span>
            <div
              class="w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 z-[1] top-[50%] translate-y-[-50%]"
            ></div>
          </div>
          <div class="flex items-center gap-3">
            <span
              class="text-blue-200 font-bold font-roboto-serif text-[28px] sm:text-[32px] md:text-[36px] whitespace-nowrap"
            >
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
            class="text-white bg-blue-200 text-[10px] font-bold font-inter w-full rounded-md text-center px-1.5 py-[3.5px] uppercase mt-1.5 lg:mt-0"
          >
            Limited Time Promotional Price
          </span>
        </div>
        <button
          @click="openTripPackage"
          class="text-white sm:text-[18px] lg:text-[20px] 2xl:text-[24px] font-inter font-bold tracking-[0.02] bg-pink-500 px-5 py-2.5 2xl:px-6 2xl:py-3 rounded-xl btnShadow"
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

const bannerScrollList = ref<HTMLElement | null>(null);
const activeBanner = ref(0);

const scrollToBanner = (index: number) => {
  if (bannerScrollList.value) {
    bannerScrollList.value.scrollTo({
      left: index * bannerScrollList.value.clientWidth,
      behavior: "smooth",
    });
  }
};

const autoScroll = () => {
  if (activeBanner.value < props.tripPackage.gallery.length - 1) {
    activeBanner.value++;
  } else {
    activeBanner.value = 0;
  }
  scrollToBanner(activeBanner.value);
};

const calcCurrentBanner = () => {
  if (bannerScrollList.value) {
    const scrollLeft = bannerScrollList.value.scrollLeft;
    const bannerWidth = bannerScrollList.value.clientWidth;
    activeBanner.value = Math.round(scrollLeft / bannerWidth);
  }
};

onMounted(() => {
  // setInterval(autoScroll, 5000);
});

const openTripPackage = () => {
  navigateTo(`/trip-package/${props.tripPackage.id}`);
};
</script>

<style scoped>
.customShadow {
  box-shadow: 0 4px 32px rgb(119, 51, 67, 0.05),
    0 2px 2px rgba(118, 32, 78, 0.15);
}
</style>
