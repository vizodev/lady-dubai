<template>
  <Header />
  <Hero />
  <div class="dynamic-section" v-if="!loadingTripPackages">
    <TripPackages />
    <CtaSection />
    <ContactV2 />
  </div>
  <Footer />
</template>

<script lang="ts" setup>
const tripPackagesStore = useTripPackagesStore();
const { loadingTripPackages, errorOnLoadTripPackages } =
  storeToRefs(tripPackagesStore);

onMounted(async () => {
  await tripPackagesStore.loadTripPackages();
});
</script>
