<template>
  <div class="flex flex-col w-full pt-[96px] pb-[194px]">
    <div class="flex gap-8 items-stretch justify-center">
      <PackageCard
        v-for="tripPackage in state.tripPackages"
        :tripPackage="tripPackage"
      />
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
  Array.from({ length: 3 }).forEach(() => {
    state.tripPackages.push(defaultTripPackage);
  });
});
</script>
