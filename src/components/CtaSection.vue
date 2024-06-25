<template>
  <div class="flex flex-col bg-pink-100 py-20 px-4 items-center justify-center">
    <div class="flex items-center gap-[100px] relative">
      <div
        class="absolute bg-[#F5F8FA] w-[110%] h-full rounded-full blur-[100px] opacity-50 z-0"
      ></div>
      <div
        class="rounded-xl w-[600px] h-[489px] border-[14px] border-white rotate-[1.98deg] relative z-1"
      >
        <img
          src="~/assets/imgs/cta.jpg"
          alt=""
          class="w-full h-full object-cover"
        />
      </div>
      <div class="flex flex-col gap-[72px] relative z-1">
        <div class="flex flex-col gap-8">
          <div class="flex flex-col">
            <p class="text-[52px] font-medium font-roboto-serif text-pink-600">
              Created with the <br />
              <b>Religious Woman</b> <br />
              in mind
            </p>
          </div>
          <span class="font-inter font-light text-brown-700">
            With our female-only staff, and gender exclusive tours, <br />
            you can feel safe and confortable to simply enjoy your trip.
          </span>
        </div>
        <div class="flex flex-col gap-3 items-start">
          <button
            class="bg-pink-600 text-white font-bold font-inter text-sm px-3 py-2 rounded-xl"
          >
            See Testemonials
          </button>
          <div class="flex items-center gap-3">
            <img src="~/assets/imgs/ytbIcon.svg" alt="" class="w-[25px]" />
            <span class="text-pink-600 font-medium font-inter">
              Or check our <b>youtube playlist</b> for real-life experiences
              with <span class="font-extralight">Lady Dubai</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>
