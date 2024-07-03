<template>
  <div class="flex flex-col overflow-y-auto w-full">
    <iframe
      :src="currentAttraction?.videoUrl"
      frameborder="0"
      class="w-full h-[782px]"
    ></iframe>
    <div class="flex justify-center gap-8">
      <div class="w-full flex flex-col items-end"></div>
      <div class="w-full flex flex-col items-center justify-center">
        <img
          :src="currentAttraction?.asideImg"
          alt=""
          class="w-full max-w-[800px] h-full max-h-[557px] rounded object-cover"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Attraction } from "~/models";

const attractionStore = useAttractionsStore();
const { loadingAttractions, errorOnLoadAttractions, attractions } =
  storeToRefs(attractionStore);

const attractionId = computed(() => {
  return useRoute().params.id;
});
const currentAttraction = ref<Attraction>();

onMounted(() => {
  loadAttraction();
});

const loadAttraction = async () => {
  const attraction = attractions.value.find(
    (attraction) => attraction.id === attractionId.value
  );

  if (attraction) {
    currentAttraction.value = attraction;
  } else {
    currentAttraction.value = await attractionStore.loadAttractionById();
  }
};
</script>
