<template>
  <div class="flex flex-col overflow-y-auto w-full">
    <TripPackageGallery :gallery="currentTripPackage?.gallery ?? []" />
    <section
      class="flex items-stretch w-full justify-between px-[245px] pt-[47px] relative z-10 pb-16"
    >
      <div class="flex flex-col max-w-[600px] gap-[52px]">
        <div class="flex flex-col gap-8">
          <div class="flex gap-3">
            <button
              class="flex gap-3 items-center"
              v-for="(path, index) in relativePath"
              :class="{
                'text-pink-600': index < relativePath.length - 1,
                'text-[#272223]': index === relativePath.length - 1,
              }"
              :disabled="index === relativePath.length - 1"
              @click="path.path?.length ? navigateTo(path.path) : null"
            >
              <span
                class="text-[12px] leading-tight font-medium font-inter uppercase hover:underline font-medium font-inter uppercase"
              >
                {{ path.label.en }}
              </span>
              <div
                class="flex items-center justify-center h-full"
                v-if="index < relativePath.length - 1"
              >
                <i class="fi fi-sr-angle-right text-[12px]"></i>
              </div>
            </button>
          </div>
          <div class="flex flex-col gap-0.5">
            <span
              class="font-medium text-[52px] text-[#272223] leading-tight font-roboto-serif"
            >
              {{ currentTripPackage?.title }}
            </span>
            <span class="font-inter font-light text-[24px] leading-none">
              {{ currentTripPackage?.subtitle }}
            </span>
          </div>
          <span class="font-light font-inter leading-normal">
            {{ currentTripPackage?.description }}
          </span>
        </div>
        <div class="flex flex-col gap-12">
          <div class="flex flex-col gap-3">
            <span class="uppercase font-bold font-inter leading-tight">
              What’s included
            </span>
            <div class="flex gap-6 flex-wrap">
              <div
                class="flex items-center gap-1.5"
                v-for="serv in packagesServicesList"
              >
                <img :src="serv.icon" alt="" class="w-6" />
                <span class="font-medium font-inter leading-tight">
                  {{ serv.label.en }}
                </span>
              </div>
            </div>
          </div>
          <div class="flex flex-col gap-3">
            <span class="uppercase font-bold font-inter leading-tight">
              Available guide languages
            </span>
            <div
              class="flex flex-wrap gap-5 items-center w-full"
              v-if="currentTripPackage"
            >
              <span
                class="border border-[#272223] text-[#272223] font-medium font-inter px-1.5 py-1 rounded-md"
                v-for="language in currentTripPackage.guideLanguages"
              >
                {{ language }}
              </span>
            </div>
          </div>
        </div>
      </div>
      <TripPackagePageEdgeCard
        v-if="currentTripPackage"
        :trip-package="currentTripPackage"
      />
    </section>
    <div class="flex flex-col w-full px-[245px] py-[52px] gap-8">
      <span class="font-roboto-serif font-medium text-[36px] leading-tight">
        Attractions
      </span>
      <Attractions />
      <Accommodations />
    </div>
    <div
      class="flex flex-col gap-3 w-full bg-pink-100 items-center py-[26px] my-[52px]"
    >
      <span
        class="text-[52px] font-roboto-serif font-medium leading-tight text-[#272223]"
      >
        Check Other Packages
      </span>
      <div class="flex items-center gap-[82px] text-pink-600">
        <button
          class="flex items-center gap-1.5"
          v-if="previousPackage"
          @click="navigateTo(`/trip-package/${previousPackage.id}`)"
        >
          <div class="flex items-center justify-center w-9 h-9">
            <i class="fi fi-sr-angle-left text-[12px]"></i>
          </div>
          <span class="text-[24px] font-medium font-roboto-serif leading-tight">
            {{ previousPackage.title }}
          </span>
        </button>
        <button
          class="flex items-center gap-1.5"
          v-if="nextPackage"
          @click="navigateTo(`/trip-package/${nextPackage.id}`)"
        >
          <span
            class="text-[24px] font-medium font-roboto-serif leading-tight"
            >{{ nextPackage.title }}</span
          >
          <div class="flex items-center justify-center w-9 h-9">
            <i class="fi fi-sr-angle-right text-[12px]"></i>
          </div>
        </button>
      </div>
    </div>
    <Contact />
    <Footer />
  </div>
</template>

<script lang="ts" setup>
import { packagesServicesList } from "~/models";
const tripPackagesStore = useTripPackagesStore();
const { loadingTripPackages, errorOnLoadTripPackages, tripPackages } =
  storeToRefs(tripPackagesStore);

const previousPackage = computed(() => {
  const index = tripPackages.value.findIndex(
    (tripPackage) => tripPackage.id === packId.value
  );
  return tripPackages.value[index - 1];
});

const nextPackage = computed(() => {
  const index = tripPackages.value.findIndex(
    (tripPackage) => tripPackage.id === packId.value
  );
  return tripPackages.value[index + 1];
});

const packId = computed(() => {
  return useRoute().params.id;
});

const relativePath = ref<
  {
    label: {
      en: string;
      he: string;
    };
    path?: string;
  }[]
>([]);

onMounted(() => {
  relativePath.value = [
    {
      label: {
        en: "Lady Dubai",
        he: "ליידי דובאי",
      },
      path: "/",
    },
    {
      label: {
        en: "All Packages",
        he: "כל החבילות",
      },
      path: "/",
    },
    {
      label: {
        en: currentTripPackage.value?.title ?? "",
        he: currentTripPackage.value?.title ?? "",
      },
    },
  ];
});

const currentTripPackage = computed(() => {
  return tripPackages.value.find(
    (tripPackage) => tripPackage.id === packId.value
  );
});
</script>
