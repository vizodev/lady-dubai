<template>
  <button class="flex items-center gap-2 sm:gap-3" @click="handleChange()">
    <div
      class="w-[24px] h-[24px] border border-pink-600 rounded-md flex items-center justify-center"
    >
      <div
        class="w-[16px] h-[16px] bg-pink-600 rounded-[3px]"
        v-if="state.checked"
      ></div>
    </div>
    <span
      class="font-medium font-inter text-sm sm:text-base"
      :class="{
        'text-brown-700': !state.checked,
        'text-pink-600': state.checked,
      }"
    >
      {{ label }}
    </span>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean;
  label: string;
}>();

const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const state = reactive({
  checked: props.modelValue,
});

const handleChange = () => {
  state.checked = !state.checked;
  emits("update:modelValue", state.checked);
};
</script>
