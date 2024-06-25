<template>
  <div class="flex items-center gap-3">
    <div class="w-[27px] h-[16px] rounded-sm bg-brown-700"></div>
    <span class="uppercase font-inter font-medium text-xs text-brown-700">{{
      language
    }}</span>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  language: string;
}>();
</script>
