// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: "src",
  css: ["~/assets/css/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
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
  modules: ["@pinia/nuxt", "@nuxtjs/supabase"],
  supabase: {
    key: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXB1cHJxd25wanFwZ2FwZHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk5Mjg5NzIsImV4cCI6MjAzNTUwNDk3Mn0.Sj_M_vvrLBzsqTfKx3g3IWaV0ZW474S9YhZgiO5OsLc",
    url: "https://vjqpuprqwnpjqpgapdyt.supabase.co",
    redirect: false,
    serviceKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZqcXB1cHJxd25wanFwZ2FwZHl0Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxOTkyODk3MiwiZXhwIjoyMDM1NTA0OTcyfQ.I6PHUrlrUqF7FtVlGLpfvVsTdHvlkDNIwyPSySm7hXs",
  },
});
