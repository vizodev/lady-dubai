<template>
  <div class="fixed inset-0 flex flex-col w-full">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script lang="ts" setup>
import { useSupabaseStore } from "./stores/supabase";

const supabaseStore = useSupabaseStore();
const { supabase } = storeToRefs(supabaseStore);

onMounted(async () => {
  await supabaseStore.initSupabase();
  const { data } = await supabase.value.from("languages");
  console.log(data);
});
</script>
