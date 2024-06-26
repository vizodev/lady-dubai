<template>
  <button
    class="flex items-center gap-3 duration-[.2s] text-brown-700 hover:!text-blue-500"
  >
    <div class="w-[27px] h-[16px] rounded-sm bg-brown-700"></div>
    <span class="uppercase font-inter font-medium text-xs">{{ language }}</span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  language: string;
}>();
</script>
