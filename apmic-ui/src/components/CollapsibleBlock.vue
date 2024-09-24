<template>
  <div
    class="transform:top overflow:hidden"
    :class="{
      'max-h:1000 scaleY(1) transition:max-height|300ms|ease-in|200ms': isShow,
      'max-h:0 transition:max-height|300ms|ease': !isShow
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  isShow: {
    type: Boolean,
    default: false
  }
})
</script>
