<template>
  <div class="flex flex-col overflow-y-auto w-full">
    <iframe
      :src="currentAttraction?.videoUrl"
      frameborder="0"
      class="w-full h-[782px]"
    ></iframe>
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
