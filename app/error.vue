<script setup lang="ts">
  import type { NuxtError } from '#app'

  defineProps({
    error: {
      type: Object as PropType<NuxtError>,
      required: true
    }
  })

  useHead({
    htmlAttrs: {
      lang: 'en'
    }
  })

  useSeoMeta({
    title: 'Page not found',
    description: 'We are sorry but this page could not be found.'
  })
</script>

<template>
  <div>
    <AppHeader :links="navLinks" />

    <div class="min-h-screen">
      <UContainer>
        <div class="py-16">
          <UError :error="error" />
        </div>
      </UContainer>
    </div>

    <AppFooter />
  </div>
</template>
