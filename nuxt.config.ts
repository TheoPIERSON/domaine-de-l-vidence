// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  fonts: {
    families: [
      {
        name: "Montserrat",
        weights: [400, 500, 700],
      },
      {
        name: "Merriweather",
        weights: [400, 700],
      },
    ],
  },
});
