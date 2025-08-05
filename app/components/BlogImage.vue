<template>
  <figure class="blog-img-container">
    <img
      :src="src"
      :alt="alt"
      :class="imageClass"
      loading="lazy"
    />
    <figcaption v-if="caption" class="blog-img-caption">
      {{ caption }}
    </figcaption>
  </figure>
</template>

<script setup lang="ts">
interface Props {
  src: string
  alt: string
  caption?: string
  size?: 'xs' | 'sm' | 'md' | 'lg'
  isGif?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  size: 'lg',
  isGif: false
})

const imageClass = computed(() => {
  if (props.isGif) {
    return `blog-img-gif-${props.size}`
  }
  return `blog-img-${props.size}`
})
</script>

