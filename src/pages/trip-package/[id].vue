<template>
  <div class="flex flex-col">
    <TripPackageGallery :gallery="currentTripPackage?.gallery ?? []" />
    <div
      class="flex items-stretch w-full justify-between px-[245px] pt-[47px] relative z-10"
    >
      <div class="flex flex-col max-w-[600px]">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col gap-0.5">
            <span
              class="font-medium text-[52px] text-[#272223] leading-tight font-roboto-serif"
            >
              {{ currentTripPackage?.title }}
            </span>
            <span class="font-inter font-light text-[24px] leading-none">
              {{ currentTripPackage?.subtitle }}
            </span>
          </div>
          <span class="font-light font-inter leading-normal">
            {{ currentTripPackage?.description }}
          </span>
        </div>
      </div>
      <div
        class="flex flex-col w-full max-w-[528px] bg-white shadow-md pt-8 pb-[52px] px-6 rounded-[16px] -mt-[calc(47px+35px)] items-center"
      >
        <div class="flex flex-col gap-6 items-center">
          <div class="flex flex-col items-center gap-1">
            <span
              class="text-[#749BFF] font-bold text-[20px] leading-tight font-inter"
            >
              Limited Time Promotional Price
            </span>
            <div class="relative w-fit">
              <span
                class="text-brown-700 font-semibold font-roboto-serif text-[24px]"
              >
                {{ `$ ${currentTripPackage?.downSalePrice?.usd}` }}
              </span>
              <div
                class="w-full h-0.5 bg-blue-200 absolute rotate-[15deg] left-0 z-[1] top-[50%] translate-y-[-50%]"
              ></div>
            </div>
            <div
              class="flex items-center gap-1 bg-blue-200 text-white rounded-[10px] px-1.5 py-1"
            >
              <i class="fi fi-br-clock-three flex"></i>
              <span class="text-sm font-bold font-inter">
                7 Days, 23H, 13m
              </span>
            </div>
          </div>
          <div class="flex items-center gap-3">
            <span
              class="text-pink-500 font-bold font-roboto-serif text-[28px] sm:text-[32px] md:text-[36px] xl:text-[48px] whitespace-nowrap"
            >
              {{ `$ ${currentTripPackage?.price?.usd}` }}
            </span>
            <div class="flex flex-col font-inter">
              <span class="font-bold text-pink-600 leading-none"> DIRHAM </span>
              <span class="text-[14px] font-medium text-pink-500">
                per person
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const tripPackagesStore = useTripPackagesStore();
const { loadingTripPackages, errorOnLoadTripPackages, tripPackages } =
  storeToRefs(tripPackagesStore);

const packId = computed(() => {
  return useRoute().params.id;
});

const currentTripPackage = computed(() => {
  return tripPackages.value.find(
    (tripPackage) => tripPackage.id === packId.value
  );
});
</script>
