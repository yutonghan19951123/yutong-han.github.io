<script setup lang="ts">
  import type { IndexCollectionItem } from '@nuxt/content'

  const { footer, global } = useAppConfig()

  defineProps<{
    page: IndexCollectionItem
  }>()
</script>

<template>
  <div class="relative pt-16 sm:pt-24">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <div class="flex items-center justify-center mb-8">
          <Motion
            :initial="{
              scale: 1.1,
              opacity: 0,
              filter: 'blur(20px)'
            }"
            :animate="{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)'
            }"
            :transition="{
              duration: 0.6,
              delay: 0.1
            }"
          >
            <img
              :src="global.picture?.light"
              :alt="global.picture?.alt"
              class="size-22 ring ring-default ring-offset-3 ring-offset-(--ui-bg) rounded-full"
              style="object-fit: cover"
            >
          </Motion>
        </div>

        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.1
          }"
        >
          <div
            class="text-shadow-md max-w-lg mx-auto text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-gray-100"
          >
            {{ page.title }}
          </div>
        </Motion>

        <Motion
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: 0.3
          }"
        >
          <p
            class="mt-6 text-base leading-8 text-gray-600 mx-12 dark:text-gray-400"
          >
            {{ page.description }}
          </p>
        </Motion>

        <div class="my-8 flex-col justify-center items-center">
          <Motion
            :initial="{
              scale: 1.1,
              opacity: 0,
              filter: 'blur(20px)'
            }"
            :animate="{
              scale: 1,
              opacity: 1,
              filter: 'blur(0px)'
            }"
            :transition="{
              duration: 0.6,
              delay: 0.5
            }"
          >
            <div
              v-if="page.hero.links"
              class="flex items-center gap-2 justify-center"
            >
              <UButton v-bind="page.hero.links[0]" />
            </div>
          </Motion>

          <div class="gap-x-4 inline-flex mt-4 justify-center">
            <Motion
              v-for="(link, index) of footer?.links"
              :key="index"
              :initial="{
                scale: 1.1,
                opacity: 0,
                filter: 'blur(20px)'
              }"
              :animate="{
                scale: 1,
                opacity: 1,
                filter: 'blur(0px)'
              }"
              :transition="{
                duration: 0.6,
                delay: 0.5 + index * 0.1
              }"
            >
              <SmartLinkButton :link="link" />
            </Motion>
          </div>
        </div>
      </div>
    </div>

    <div class="py-12 -mx-4 sm:-mx-6 lg:-mx-8 overflow-hidden">
      <div class="flex gap-24 animate-marquee items-center">
        <Motion
          v-for="(img, index) in [...page.hero.images, ...page.hero.images]"
          :key="index"
          :initial="{
            scale: 1.1,
            opacity: 0,
            filter: 'blur(20px)'
          }"
          :animate="{
            scale: 1,
            opacity: 1,
            filter: 'blur(0px)'
          }"
          :transition="{
            duration: 0.6,
            delay: (index % page.hero.images.length) * 0.1
          }"
        >
          <img
            class="!w-[250px] !h-auto !max-w-none rounded-xl shadow-2xl"
            :class="
              (index % page.hero.images.length) % 2 === 0
                ? '-rotate-3'
                : 'rotate-3'
            "
            v-bind="img"
          >
        </Motion>
      </div>
    </div>
  </div>
</template>
