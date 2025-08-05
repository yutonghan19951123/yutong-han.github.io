<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content'

  const props = defineProps<{
    page: IndexCollectionItem
  }>()

  const items = computed(() => {
    return props.page.faq?.categories.map((faq) => {
      return {
        label: faq.title,
        key: faq.title.toLowerCase(),
        questions: faq.questions
      }
    })
  })

  const ui = {
    root: 'flex items-center gap-4 w-full',
    list: 'relative flex bg-transparent dark:bg-transparent gap-2 px-0',
    indicator:
      'absolute top-[4px] duration-200 ease-out focus:outline-none rounded-lg bg-elevated/60',
    trigger:
      'px-3 py-2 rounded-lg hover:bg-muted/50 data-[state=active]:text-highlighted data-[state=inactive]:text-muted',
    label: 'truncate'
  }
</script>

<template>
  <section class="py-16 sm:py-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2
          class="text-left text-xl sm:text-xl lg:text-2xl font-medium text-gray-900 dark:text-white"
        >
          {{ page.faq.title }}
        </h2>
        <p
          class="text-left mt-2 text-sm sm:text-md lg:text-sm text-gray-500 dark:text-gray-400"
        >
          {{ page.faq.description }}
        </p>
      </div>

      <div class="mt-12">
        <UTabs
:items
orientation="horizontal"
:ui
>
          <template #content="{ item }">
            <UAccordion
              :items="item.questions"
              :ui="{
                item: 'border-none',
                trigger:
                  'mb-2 border-0 group px-4 transform-gpu rounded-lg bg-gray-100 dark:bg-gray-800 will-change-transform hover:bg-gray-200 dark:hover:bg-gray-700',
                trailingIcon:
                  'group-data-[state=closed]:rotate-0 group-data-[state=open]:rotate-135'
              }"
            >
              <template #body="{ item: _item }">
                <MDC
:value="_item.content"
unwrap="p"
class="px-4"
/>
              </template>
            </UAccordion>
          </template>
        </UTabs>
      </div>
    </div>
  </section>
</template>
