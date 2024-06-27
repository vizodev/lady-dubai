<template>
  <div class="flex flex-col text-2xl">
    {{ packId }}
  </div>
</template>

<script lang="ts" setup>
const packId = computed(() => {
  return useRoute().params.id;
});
</script>
