// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/ui',
    '@nuxt/content',
    '@vueuse/nuxt',
    'nuxt-og-image',
    'motion-v/nuxt'
  ],

  // Use SSR only in production for static site generation
  // In development, use CSR for faster development experience
  ssr: process.env.NODE_ENV === 'production',

  devtools: {
    enabled: true
  },

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      link: []
    }
  },

  css: ['~/assets/css/main.css'],

  // Content module configuration for better static generation
  content: {
    // Enable static site generation for content
  },

  compatibilityDate: '2024-11-01',

  nitro: {
    prerender: {
      routes: ['/', '/about', '/blog', '/projects', '/speaking'],
      crawlLinks: true,
      // Ensure all blog posts are pre-rendered
      ignore: ['/api/**']
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
