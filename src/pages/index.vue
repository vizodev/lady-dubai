<template>
  <Header />
  <Hero />
  <div class="dynamic-section" v-if="!loadingTripPackages">
    <TripPackages />
    <CtaSection />
    <ContactV2 />
  </div>
  <Footer />
  <div
    v-if="showContact"
    class="fixed bottom-[80px] right-20 animate-bounce hover:animate-none transition-all duration-[.2s]"
  >
    <button
      class="flex items-center justify-center bg-[#21B65A] rounded-full w-[52px] h-[52px] text-white text-[24px] customShadow"
    >
      <i class="fi fi-brands-whatsapp"></i>
    </button>
  </div>
</template>

<script lang="ts" setup>
const tripPackagesStore = useTripPackagesStore();
const { loadingTripPackages, errorOnLoadTripPackages } =
  storeToRefs(tripPackagesStore);

const showContact = ref(false);

onMounted(async () => {
  await tripPackagesStore.loadTripPackages();

  window.addEventListener("scroll", () => {
    if (window.scrollY > 150) {
      showContact.value = true;
    } else {
      showContact.value = false;
    }
  });
});
</script>

<style scoped>
.customShadow {
  box-shadow: 0px 0px 2px rgba(118, 32, 78, 0.15),
    0px 4px 32px rgba(119, 51, 67, 0.05);
}
</style>
