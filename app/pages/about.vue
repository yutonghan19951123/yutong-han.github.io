<script setup lang="ts">
  import type { TimelineItem } from '@nuxt/ui'
  import { handleLinkClick, getTooltipText } from '~/utils/linkHandlers'

  const { data: page } = await useAsyncData('about', () => {
    return queryCollection('about').first()
  })
  if (!page.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Page not found',
      fatal: true
    })
  }

  const { global } = useAppConfig()

  useSeoMeta({
    title: page.value?.seo?.title || page.value?.title,
    ogTitle: page.value?.seo?.title || page.value?.title,
    description: page.value?.seo?.description || page.value?.description,
    ogDescription: page.value?.seo?.description || page.value?.description
  })

  const items = ref<TimelineItem[]>([
    {
      date: 'June, 2017',
      title: 'China University of Political Science and Law',
      description: `Bachelor's in Applied Psychology`,
      icon: 'i-lucide-book-open-text'
    },
    {
      date: 'December, 2020',
      title: 'University of Miami ',
      description: `Master's in Interactive Media Master`,
      icon: 'i-lucide-graduation-cap'
    },
    {
      date: 'September, 2022',
      title: 'Caixin Media Company Ltd.',
      description: 'Data Journalist',
      icon: 'i-lucide-newspaper'
    },
    {
      date: 'July, 2025',
      title: 'Tranalytic Technology Co., Ltd.',
      description: `Front-End & Data Visualization Engineer`,
      icon: 'i-lucide-braces'
    },
    {
      date: 'July, 2027',
      title: 'Georgia Institute of Technology',
      description: 'Online Master of Science in Computer Science',
      icon: 'i-lucide-binary'
    }
  ])

  const { footer } = useAppConfig()

  const openResume = () => {
    window.open('/file/resume.pdf', '_blank')
  }
</script>

<template>
  <UPage v-if="page">
    <UPageHero
      :title="page.title"
      :description="page.description"
      orientation="horizontal"
      :ui="{
        container: 'lg:flex sm:flex-row items-center',
        title: '!mx-0 text-left',
        description: '!mx-0 text-left',
        links: 'justify-start'
      }"
    >
      <!-- Resume Button -->
      <div class="absolute bottom-16">
        <UButton
          color="neutral"
          variant="solid"
          size="lg"
          class="inline-flex items-center gap-2"
          @click="openResume"
        >
          <UIcon name="i-lucide-file-text" class="w-5 h-5" />
          View Resume
        </UButton>
      </div>
      <img
        :src="global.picture?.light"
        :alt="global.picture?.alt"
        class="sm:rotate-4 size-36 rounded-lg ring ring-default ring-offset-3 ring-offset-(--ui-bg)"
      />
    </UPageHero>

    <UPageSection
      :ui="{
        container: '!pt-0'
      }"
    >
      <!-- Timeline Section -->
      <div class="flex justify-center">
        <UTimeline
          color="neutral"
          :default-value="3"
          :items="items"
          class="w-96 translate-x-[calc(50%-1rem)]"
          :ui="{
            item: 'even:flex-row-reverse even:-translate-x-[calc(100%-2rem)] even:text-right'
          }"
        />
      </div>

      <MDC
        :value="page.content"
        unwrap="p"
      />

      <div
        class="flex flex-row justify-center items-center py-10 space-x-[-2rem]"
      >
        <PolaroidItem
          v-for="(image, index) in page.images"
          :key="index"
          :image="image"
          :index
        />
      </div>

      <!-- Get in Touch Section -->
      <div
        id="contact"
        class="mt-16 py-12 bg-gray-50 dark:bg-gray-900/50 rounded-2xl border border-gray-200 dark:border-gray-700"
      >
        <div class="text-center mb-8">
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Get in Touch
          </h2>
          <p class="text-lg text-gray-600 dark:text-gray-300">
            Let's connect and discuss opportunities together
          </p>
        </div>

        <div
          id="contact"
          class="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto px-6 items-stretch"
        >
          <div
            v-for="link in footer?.links"
            :key="link['aria-label']"
            class="group"
          >
            <CopyTooltip
              :text="getTooltipText(link)"
              :copy-text="link?.account ?? link.to"
              :aria-label="link['aria-label']"
            >
              <UCard
                class="h-full transition-all duration-300 hover:scale-105 hover:shadow-lg cursor-pointer border border-gray-200 dark:border-gray-700"
                @click="handleLinkClick(link)"
              >
                <div
                  class="text-center h-full flex flex-col justify-between py-4"
                >
                  <div class="flex flex-col items-center">
                    <div
                      class="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-gray-200 dark:group-hover:bg-gray-700 transition-colors"
                    >
                      <UIcon
                        :name="link.icon"
                        class="w-5 h-5 text-gray-600 dark:text-gray-300"
                      />
                    </div>
                    <h3
                      class="font-semibold text-gray-900 dark:text-white mb-1 text-sm"
                    >
                      {{
                        link['aria-label']
                          ?.replace(' address', '')
                          .replace(' ID', '')
                      }}
                    </h3>
                  </div>
                  <div
                    class="text-xs h-8 text-gray-600 dark:text-gray-400 break-all line-clamp-2"
                  >
                    {{ link?.account ?? link.to }}
                  </div>
                </div>
              </UCard>
            </CopyTooltip>
          </div>
        </div>
      </div>
    </UPageSection>
  </UPage>
</template>
