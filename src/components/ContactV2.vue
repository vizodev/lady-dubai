<template>
  <div
    class="flex items-center lg:items-stretch gap-16 lg:gap-[52px] justify-center py-16 sm:py-20 md:py-[100px] px-6 flex-col lg:flex-row"
  >
    <div
      class="flex flex-col bg-white w-full max-w-[768px] lg:max-w-[529px] rounded-xl shadow-md px-6 py-12 pb-8 sm:p-[52px] gap-8 sm:gap-[52px]"
    >
      <span
        class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
      >
        Send Us a Message
      </span>
      <div class="flex flex-col gap-6">
        <input
          type="text"
          v-model="contactForm.name"
          class="font-inter placeholder:font-light placeholder:italic placeholder:text-pink-600 text-brown-700 border border-pink-600 px-4 py-3 rounded-md bg-transparent"
          placeholder="Name"
        />
        <input
          type="text"
          v-model="contactForm.email"
          class="font-inter placeholder:font-light placeholder:italic placeholder:text-pink-600 text-brown-700 border border-pink-600 px-4 py-3 rounded-md bg-transparent"
          placeholder="E-mail"
        />
        <div class="flex flex-col gap-3 sm:px-4 pt-[9px] pb-8">
          <span class="font-inter text-[20px] sm:text-[24px] text-brown-700">
            Interested in a specific Pack?
          </span>
          <div class="flex gap-9 items-start">
            <div
              class="flex flex-col gap-4"
              v-for="chunk in availableTripPackages"
            >
              <CheckboxInput
                v-for="tripPackage in chunk"
                :modelValue="tripPackage.checked"
                :label="tripPackage.title"
              />
            </div>
          </div>
        </div>
        <textarea
          v-model="contactForm.message"
          rows="4"
          class="font-inter placeholder:font-light placeholder:italic placeholder:text-pink-600 text-brown-700 border border-pink-600 px-4 py-3 rounded-md bg-transparent"
          placeholder="Message"
        ></textarea>
      </div>
      <button
        class="text-white bg-pink-500 rounded-xl px-5 xl:px-6 py-2.5 xl:py-3 font-inter font-bold sm:text-[18px] lg:text-[20px] 2xl:text-[24px] textShadow self-end tracking-[0.02]"
      >
        Send
      </button>
    </div>
    <div
      class="flex flex-col gap-8 sm:gap-12 md:gap-16 items-start md:py-[52px] px-0 xl:px-[52px] w-full max-w-[768px] lg:max-w-max"
    >
      <div class="flex flex-col gap-3 items-start">
        <span
          class="text-[24px] sm:text-[30px] font-bold font-roboto-serif leading-tight"
        >
          Or Talk to Us Via WhatsApp
        </span>
        <span
          class="text-[20px] sm:text-[24px] font-roboto-serif leading-tight"
        >
          Ir you have any doubts or special requests
        </span>
      </div>
      <button
        class="flex items-center text-white bg-pink-500 rounded-xl px-5 xl:px-6 py-2.5 xl:py-3 font-inter font-bold sm:text-[18px] lg:text-[20px] 2xl:text-[24px] textShadow tracking-[0.02] gap-4"
      >
        <div class="h-6 max-h-[24px]">
          <i class="fi fi-brands-whatsapp"></i>
        </div>
        Chat on WhatsApp
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
const contactForm = ref({
  name: "",
  email: "",
  message: "",
});

const availableTripPackages = ref<
  {
    title: string;
    value: string;
    checked: boolean;
  }[][]
>([]);

const defaultTripPackages = [
  {
    title: "Dubai Experience",
    value: "dubaiExp",
    checked: false,
  },
  {
    title: "Fun Lady",
    value: "funLady",
    checked: false,
  },
  {
    title: "Relocation",
    value: "relocation",
    checked: false,
  },
  {
    title: "Other",
    value: "other",
    checked: false,
  },
];

const loadTripPackages = () => {
  // Split in chunks of 2
  const chunkedTripPackages = defaultTripPackages.reduce(
    (resultArray: any, item, index) => {
      const chunkIndex = Math.floor(index / 2);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [];
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    },
    []
  );

  availableTripPackages.value = chunkedTripPackages;
};

onMounted(() => {
  loadTripPackages();
});
</script>

<style scoped>
.textShadow {
  text-shadow: 0px 0px 6px rgb(43, 6, 52, 0.15), 0 1px 2px rgb(48, 6, 16, 0.25);
}
</style>
