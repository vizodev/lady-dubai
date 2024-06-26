// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  css: ["~/assets/css/global.css"],
  nitro: {
    preset: "firebase",
    firebase: {
      gen: 2,
      nodeVersion: "18",
      serverFunctionName: "server",
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  ssr: true,
  app: {
    head: {
      title: "Lady Dubai",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Roboto+Serif:ital,opsz,wght@0,8..144,100..900;1,8..144,100..900&display=swap",
          rel: "stylesheet",
        },
      ],
    },
  },
  devServer: {
    port: 3001,
  },
  alias: {},
});
