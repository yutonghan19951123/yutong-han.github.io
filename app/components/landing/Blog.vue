<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content'

  defineProps<{
    page: IndexCollectionItem
  }>()

  const { data: posts } = await useAsyncData('index-blogs', () =>
    queryCollection('blog').order('date', 'DESC').limit(3).all()
  )
  if (!posts.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'blogs posts not found',
      fatal: true
    })
  }
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="px-0 !pt-0 sm:gap-6 lg:gap-8">
        <h2 class="text-left text-xl sm:text-xl lg:text-2xl font-medium">
          {{ page.blog.title }}
        </h2>
        <p class="text-left mt-2 text-sm sm:text-md lg:text-sm text-muted">
          {{ page.blog.description }}
        </p>

        <div class="gap-4 lg:gap-y-4 mt-8">
          <div
            v-for="(post, index) in posts"
            :key="index"
            class="group relative lg:items-start lg:flex ring-0 hover:ring-0"
          >
            <div class="!px-0 py-8">
              <div class="flex items-center gap-2 mb-2">
                <span class="text-sm text-muted">
                  {{
                    new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long'
                    })
                  }}
                </span>
              </div>
              <h3
                class="text-lg font-semibold text-gray-900 dark:text-white mb-2"
              >
                {{ post.title }}
              </h3>
              <div class="text-gray-600 dark:text-gray-300 mb-4">
                {{ post.description }}
              </div>
              <UButton
                size="xs"
                variant="link"
                class="px-0 gap-0"
                label="Read Article"
                :to="post.path"
              >
                <template #trailing>
                  <UIcon
                    name="i-lucide-arrow-right"
                    class="size-4 text-primary transition-all opacity-0 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </template>
              </UButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
