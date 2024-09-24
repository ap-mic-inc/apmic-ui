<template>
  <button
    class="btn flex jc:center"
    :class="{ flat, dense, outline, dark, light, disable, colorbase }"
    :disabled="disable"
    @click="$emit('click')"
  >
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
  },
  colorbase: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})

defineEmits(['click'])
</script>
