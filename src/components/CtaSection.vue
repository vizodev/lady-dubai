<template>
  <div
    class="flex flex-col bg-pink-100 py-16 sm:py-20 px-4 items-center justify-center overflow-hidden"
  >
    <div
      class="flex items-center gap-12 sm:gap-16 xl:gap-[100px] relative px-4 flex-col lg:flex-row"
    >
      <div
        class="absolute bg-[#F5F8FA] w-[110%] h-full rounded-full blur-[100px] opacity-50 z-0"
      ></div>
      <div
        class="rounded-xl sm:w-[420px] md:w-[500px] 2xl:w-[600px] sm:h-[360px] md:h-[420px] 2xl:h-[489px] border-[14px] border-white rotate-[1.98deg] relative z-1"
      >
        <img
          src="/cta.jpg"
          alt=""
          class="w-full h-full object-cover"
          data-aos="flip-right"
          data-aos-offset="-300"
          data-aos-duration="1200"
        />
      </div>
      <div class="flex flex-col gap-16 sm:gap-[72px] relative z-1">
        <div class="flex flex-col gap-8 items-center lg:items-start">
          <div class="flex flex-col">
            <p
              data-aos="fade-left"
              data-aos-offset="-300"
              class="text-[40px] sm:text-[48px] lg:text-[52px] font-medium font-roboto-serif text-pink-600 leading-snug text-center lg:text-start"
            >
              Created with the <br class="hidden sm:block" />
              <b>Religious Woman</b> <br class="hidden sm:block" />
              in mind
            </p>
          </div>
          <span
            class="font-inter font-light text-brown-700 text-center lg:text-start"
          >
            With our female-only staff, and gender exclusive tours,
            <br class="hidden sm:block" />
            you can feel safe and confortable to simply enjoy your trip.
          </span>
        </div>
        <div class="flex flex-col gap-3 items-center lg:items-start">
          <button
            class="bg-pink-600 text-white font-bold font-inter text-sm px-3 py-2 rounded-xl"
          >
            See Testemonials
          </button>
          <div class="flex items-center gap-3">
            <img src="/ytbIcon.svg" alt="" class="w-[25px]" />
            <span
              class="text-pink-600 font-medium font-inter text-center lg:text-start"
            >
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
