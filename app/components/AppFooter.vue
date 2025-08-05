<script setup lang="ts">
  const { footer } = useAppConfig()
</script>

<template>
  <UFooter
class="z-10 bg-default"
:ui="{ left: 'text-xs' }"
>
    <template #left>
      {{ footer.credits }}
    </template>

    <template #right>
      <template v-if="footer?.links">
        <template
v-for="(link, index) in footer.links"
:key="index"
>
          <SmartLinkButton :link="link" />
        </template>
      </template>
    </template>
  </UFooter>
</template>
