<template>
  <div class="flex flex-col w-full pt-[96px] pb-[194px]">
    <div class="flex gap-8 items-stretch justify-center flex-wrap px-[160px]">
      <div
        v-for="tripPackage in state.tripPackages"
        class="w-full max-w-[calc((100%-64px)/3)]"
      >
        <PackageCard :tripPackage="tripPackage" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defaultTripPackage, type TripPackage } from "~/models";

const state = reactive<{
  tripPackages: TripPackage[];
}>({
  tripPackages: [],
});

onMounted(() => {
  Array.from({ length: 6 }).forEach(() => {
    state.tripPackages.push(defaultTripPackage);
  });
});
</script>
