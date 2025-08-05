// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  // Static site generation for GitHub Pages
  ssr: false,

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/yutong-han.github.io/',
    buildAssetsDir: '/yutong-han.github.io/_nuxt/'
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/', '/about', '/blog', '/projects', '/speaking'],
      crawlLinks: true
    }
  },

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
