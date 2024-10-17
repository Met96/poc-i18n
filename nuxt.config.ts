// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    'nuxt-i18n-micro',
  ],
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'it', iso: 'it-IT', dir: 'ltr' },
    ],
    fallbackLocale: 'it',
    translationDir: 'locales',
    disablePageLocales: true,
  },
})
