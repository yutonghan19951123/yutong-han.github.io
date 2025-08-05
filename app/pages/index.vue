<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () => {
    return queryCollection('index').first()
  })
  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })
  }

  useSeoMeta({
    title: page.value?.seo.title || page.value?.title,
    ogTitle: page.value?.seo.title || page.value?.title,
    description: page.value?.seo.description || page.value?.description,
    ogDescription: page.value?.seo.description || page.value?.description
  })
</script>

<template>
  <div
v-if="page"
class="min-h-screen"
>
    <LandingHero :page />
    <section class="py-2 sm:py-12">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="!pt-0 lg:grid lg:grid-cols-2 lg:gap-8">
          <LandingAbout :page />
          <LandingWorkExperience :page />
        </div>
      </div>
    </section>
    <LandingBlog :page />
    <LandingTestimonials :page />
    <!-- <LandingFAQ :page /> -->
  </div>
</template>
