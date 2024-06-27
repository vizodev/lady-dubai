<template>
  <div class="flex flex-col items-center relative py-12 sm:py-16 lg:py-[159px]">
    <img
      src="/contact1.png"
      alt=""
      class="z-0 absolute w-[136px] sm:w-[250px] xl:w-[290px] 2xl:w-auto right-4 sm:right-10 2xl:right-[80px] 3xl:right-[110px] top-0 sm:top-2 lg:top-[30px]"
    />
    <img
      src="/contact2.png"
      alt=""
      class="absolute left-0 xl:left-4 bottom-[57px] w-[400px] xl:w-auto hidden lg:block"
    />

    <div
      class="flex items-stretch gap-8 lg:gap-12 xl:gap-[72px] flex-col-reverse lg:flex-row w-full px-6 sm:px-8 md:px-16 justify-center relative z-1"
    >
      <div class="flex flex-col relative gap-6">
        <span
          class="font-roboto-serif font-medium text-[28px] sm:text-[32px] md:text-[36px] text-brown-700"
        >
          {{ `Talk via Whatsapp :)` }}
        </span>
        <div
          class="flex w-full justify-between gap-2 sm:flex-row flex-col items-center sm:items-start"
        >
          <img
            src="/contact2.png"
            alt=""
            class="w-[300px] md:w-[360px] lg:hidden"
          />
          <div class="flex items-center gap-3">
            <img src="/whatsapp-icon.svg" alt="" class="w-6" />
            <span class="font-inter font-medium text-[24px]"
              >+55 813-369-5388</span
            >
          </div>
        </div>
      </div>
      <div class="w-[1px] bg-brown-700"></div>
      <div class="flex flex-col gap-[38px] w-full lg:max-w-[512px]">
        <div class="flex flex-col gap-0 sm:gap-3">
          <span
            class="font-roboto-serif font-medium text-[28px] sm:text-[32px] md:text-[36px] text-brown-700"
          >
            Send Us a Message
          </span>
          <span
            class="font-roboto-serif font-medium text-[36px] text-brown-700"
          >
            ...
          </span>
        </div>
        <div class="flex flex-col gap-10 sm:gap-[52px]">
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
              <span
                class="font-inter text-[20px] sm:text-[24px] text-brown-700"
              >
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
      </div>
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
