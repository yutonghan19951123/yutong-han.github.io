<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content'

  defineProps<{
    page: IndexCollectionItem
  }>()
</script>

<template>
  <div class="!p-0 gap-4 sm:gap-4">
    <h2 class="text-left text-xl sm:text-xl lg:text-2xl font-medium">
      {{ page.experience.title }}
    </h2>
    <div class="mt-2">
      <div class="flex flex-col gap-2">
        <Motion
          v-for="(experience, index) in page.experience.items"
          :key="index"
          :initial="{ opacity: 0, transform: 'translateY(20px)' }"
          :while-in-view="{ opacity: 1, transform: 'translateY(0)' }"
          :transition="{ delay: 0.4 + 0.2 * index }"
          :in-view-options="{ once: true }"
          class="text-muted flex items-center text-nowrap gap-2"
        >
          <p class="text-sm">
            {{ experience.date }}
          </p>
          <USeparator />
          <ULink
            class="flex items-center gap-1"
            :to="experience.company.url"
            target="_blank"
          >
            <span class="text-sm">
              {{ experience.position }}
            </span>
            <div
              class="inline-flex items-center gap-1"
              :style="{ color: experience.company.color }"
            >
              <span class="font-medium">{{ experience.company.name }}</span>
              <img
                v-if="experience.company?.logo"
                :src="experience.company.logo"
                :alt="experience.company.name + ' logo'"
                class="h-5 w-5 inline-block align-middle"
              >
            </div>
          </ULink>
        </Motion>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
