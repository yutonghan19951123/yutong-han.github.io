<script setup lang="ts">
  import type { TimelineItem } from '@nuxt/ui'

  interface Props {
    title?: string
    items?: TimelineItem[]
  }

  const _props = withDefaults(defineProps<Props>(), {
    title: 'Project Timeline',
    items: () => [
      {
        date: 'Mar 15, 2025',
        title: 'Project Kickoff',
        description:
          'Kicked off the project with team alignment. Set up project milestones and allocated resources.',
        icon: 'i-lucide-rocket'
      },
      {
        date: 'Mar 22 2025',
        title: 'Design Phase',
        description:
          'User research and design workshops. Created wireframes and prototypes for user testing.',
        icon: 'i-lucide-palette'
      },
      {
        date: 'Mar 29 2025',
        title: 'Development Sprint',
        description:
          'Frontend and backend development. Implemented core features and integrated with APIs.',
        icon: 'i-lucide-code'
      },
      {
        date: 'Apr 5 2025',
        title: 'Testing & Deployment',
        description:
          'QA testing and performance optimization. Deployed the application to production.',
        icon: 'i-lucide-check-circle'
      }
    ]
  })
</script>

<template>
  <div class="mt-12">
    <h2 class="text-2xl font-semibold text-center mb-8">
      {{ _props.title }}
    </h2>
    <div class="flex justify-center">
      <UTimeline
        color="neutral"
        :default-value="2"
        :items="_props.items"
        class="w-96"
      />
    </div>
  </div>
</template>
