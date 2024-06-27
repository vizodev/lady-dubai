<template>
  <div
    class="flex flex-col w-full pt-10 sm:pt-[64px] lg:pt-[100px] pb-10 sm:pb-[114px] lg:pb-[150px] items-center px-6 sm:px-8 lg:px-16 2xl:px-8"
  >
    <!-- <div class="flex gap-8 items-stretch justify-center flex-wrap"> -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8 w-full sm:max-w-[calc((456px*2)+(32px))] xl:max-w-[calc((456px*3)+(32px*2))]"
    >
      <div
        class="col-span flex justify-center w-full"
        v-for="tripPackage in state.tripPackages"
      >
        <div class="w-full">
          <PackageCard :tripPackage="tripPackage" />
        </div>
      </div>
    </div>

    <!-- </div> -->
  </div>
</template>

<script lang="ts" setup>
import { type TripPackage } from "~/models";

const state = reactive<{
  baseTripPackages: TripPackage[];
  tripPackages: TripPackage[];
}>({
  baseTripPackages: [],
  tripPackages: [],
});

const tripPackagesStore = useTripPackagesStore();
const { loadingTripPackages, errorOnLoadTripPackages } =
  storeToRefs(tripPackagesStore);

onMounted(async () => {
  await loadTripPackages();

  handleTripPackagesAccordingToScreenSize();

  // Limit the number of trip packages to 3 when the screen is sm or smaller
  window.addEventListener("resize", () => {
    handleTripPackagesAccordingToScreenSize();
  });
});

const loadTripPackages = async () => {
  const tripPackages = await tripPackagesStore.loadTripPackages();
  state.baseTripPackages = tripPackages;
};

const handleTripPackagesAccordingToScreenSize = () => {
  if (window.innerWidth < 640) {
    state.tripPackages = state.baseTripPackages.slice(0, 3);
  } else if (window.innerWidth < 1024 && window.innerWidth > 639) {
    state.tripPackages = state.baseTripPackages.slice(0, 4);
  } else {
    state.tripPackages = state.baseTripPackages.slice(0, 6);
  }
};
</script>
