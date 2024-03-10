// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["./youcan"],
  devtools: { enabled: true },
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "fr", iso: "fr-FR", dir: "ltr" },
      { code: "ar", iso: "ar-EG", dir: "rtl" },
    ],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts",
  },
});
