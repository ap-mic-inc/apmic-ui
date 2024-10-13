<template>
  <button
    class="btn flex jc:center"
    :class="{ flat, dense, outline, dark, light, disabled, colorbase }"
    :disabled="disabled"
    @click.stop="handleClick()"
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
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}
</script>
