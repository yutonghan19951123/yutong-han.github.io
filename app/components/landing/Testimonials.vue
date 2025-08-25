<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content'

  defineProps<{
    page: IndexCollectionItem
  }>()
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="px-0 !pt-0">
        <UCarousel
          v-slot="{ item }"
          :items="page.testimonials"
          :autoplay="{ delay: 4000 }"
          loop
          dots
          :ui="{
            viewport:
              '-mx-4 sm:-mx-12 lg:-mx-16 bg-elevated/50 max-w-(--ui-container)'
          }"
        >
          <div class="sm:py-12 lg:py-12 sm:gap-8 text-center">
            <div
              class="!text-base text-balance relative before:content-[open-quote] before:text-5xl lg:before:text-7xl before:inline-block before:text-dimmed before:absolute before:-ml-6 lg:before:-ml-10 before:-mt-2 lg:before:-mt-4 after:content-[close-quote] after:text-5xl lg:after:text-7xl after:inline-block after:text-dimmed after:absolute after:mt-1 lg:after:mt-0 after:ml-1 lg:after:ml-2"
            >
              {{ item.quote }}
            </div>
            <div class="mt-8 flex justify-center">
              <div class="flex flex-col items-center">
                <img
                  v-if="item.author?.avatar?.src"
                  :src="item.author.avatar.src"
                  :alt="item.author?.name"
                  class="w-16 h-16 rounded-full mb-3"
                />
                <div
                  v-if="item.author?.name"
                  class="text-lg font-medium text-gray-900 dark:text-white"
                >
                  {{ item.author.name }}
                </div>
                <div
                  v-if="item.author?.description"
                  class="text-sm text-gray-500 dark:text-gray-400"
                >
                  {{ item.author.description }}
                </div>
              </div>
            </div>
          </div>
        </UCarousel>
      </div>
    </div>
  </section>
</template>
