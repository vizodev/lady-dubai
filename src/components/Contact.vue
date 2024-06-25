<template>
  <div class="flex flex-col items-center py-[52px] relative mt-[159px]">
    <img
      src="~/assets/imgs/contact1.png"
      alt=""
      class="absolute right-[110px] -top-[57px]"
    />
    <img
      src="~/assets/imgs/contact2.png"
      alt=""
      class="absolute left-4 bottom-[57px]"
    />
    <div class="flex items-stretch gap-[72px]">
      <div class="flex flex-col">
        <span class="font-roboto-serif font-medium text-[36px] text-brown-700">
          {{ `Talk via Whatsapp :)` }}
        </span>
      </div>
      <div class="w-[1px] h-full bg-brown-700"></div>
      <div class="flex flex-col gap-[38px] min-w-[512px]">
        <div class="flex flex-col gap-3">
          <span
            class="font-roboto-serif font-medium text-[36px] text-brown-700"
          >
            Send Us a Message
          </span>
          <span
            class="font-roboto-serif font-medium text-[36px] text-brown-700"
          >
            ...
          </span>
        </div>
        <div class="flex flex-col gap-[52px]">
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
            <div class="flex flex-col gap-3 px-4 pt-[9px] pb-8">
              <span class="font-inter text-[24px] text-brown-700">
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
            class="text-white bg-pink-500 rounded-xl px-6 py-3 font-inter font-bold text-[24px] textShadow self-end tracking-[0.02]"
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
