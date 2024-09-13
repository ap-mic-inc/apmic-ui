<template>
  <button class="btn" :class="{ flat, dense, outline, dark, light }" @click="$emit('click')">
    <slot name="icon"></slot>
    <slot></slot>
  </button>
</template>

<script setup>
defineProps({
  flat: {
    type: Boolean,
    default: false
  },
  dense: {
    type: Boolean,
    default: false
  },
  outline: {
    type: Boolean,
    default: false
  },
  dark: {
    type: Boolean,
    default: false
  },
  light: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>
