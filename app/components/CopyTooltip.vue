<script setup lang="ts">
  interface Props {
    text: string
    copyText: string
    ariaLabel: string
  }

  const props = defineProps<Props>()

  const isOpen = ref(false)
  const isCopied = ref(false)

  const _handleCopy = async () => {
    try {
      await copyToClipboard(props.copyText, props.ariaLabel + ' copied!')
      isCopied.value = true
      setTimeout(() => {
        isCopied.value = false
      }, 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }
</script>

<template>
  <UPopover
    :open="isOpen"
    :popper="{
      placement: 'top-end',
      offset: [0, 8]
    }"
    :ui="{
      content:
        'px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-xl border border-gray-700 whitespace-nowrap',
      arrow: 'bg-gray-900 border-gray-700'
    }"
    @update:open="isOpen = $event"
  >
    <div @mouseenter="isOpen = true" @mouseleave="isOpen = false">
      <slot />
    </div>

    <template #content>
      <div class="flex items-center gap-2">
        <UIcon
          :name="isCopied ? 'i-lucide-check' : 'i-lucide-copy'"
          class="w-4 h-4"
          :class="isCopied ? 'text-green-400' : 'text-gray-300'"
        />
        <span>{{ isCopied ? 'Copied!' : text }}</span>
      </div>
    </template>
  </UPopover>
</template>
