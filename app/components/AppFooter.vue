<script setup lang="ts">
  const { footer } = useAppConfig()
</script>

<template>
  <footer class="z-10">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div
        class="flex flex-col sm:flex-row justify-between items-center py-8 gap-4"
      >
        <div class="text-xs text-gray-500 dark:text-gray-400">
          {{ footer.credits }}
        </div>

        <div class="flex items-center gap-4">
          <template v-if="footer?.links">
            <template
v-for="(link, index) in footer.links"
:key="index"
>
              <SmartLinkButton :link="link" />
            </template>
          </template>
        </div>
      </div>
    </div>
  </footer>
</template>
