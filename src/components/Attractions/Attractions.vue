<template>
  <div class="flex items-stretch flex-wrap gap-1.5">
    <div
      class="w-full sm:max-w-[calc((100%-6px)/2)] lg:max-w-[calc((100%-12px)/3)]"
      v-for="attraction in attractions"
    >
      <AttractionsCard />
    </div>
  </div>
</template>

<script lang="ts" setup>
const attractions = ref<number[]>([]);

onMounted(async () => {
  attractions.value = [...Array.from({ length: 5 }).keys()];
});
</script>
