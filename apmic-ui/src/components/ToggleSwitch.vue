<template>
  <div
    class="flex ai:center gap:10 cursor:pointer box-shadow:0|0|0|10|rgba(0,0,0,0.1):hover:not(.disabled)_#circle box-shadow:0|0|0|10|rgba(0,0,0,0.3)!:active:not(.disabled)_#circle"
    :class="{ disabled }"
    @click="toggle"
  >
    <input type="checkbox" :checked="modelValue" class="hidden" />
    <slot v-if="!right">{{ label }}</slot>
    <div class="rel flex ai:center">
      <div
        class="w:35 h:15 r:100 transition:all|300ms"
        :class="modelValue ? 'bg:#CEE7EF' : 'bg:#82A1AB'"
      ></div>
      <div
        class="abs h:20 w:20 round transition:all|300ms box-shadow:0|1|3|#27353a"
        :class="modelValue ? 'translateX(17)' : ''"
      ></div>
      <div
        id="circle"
        class="abs h:20 w:20 round transition:all|300ms"
        :class="modelValue ? 'bg:#0797C7 translateX(17)' : 'bg:white'"
      ></div>
    </div>
    <slot v-if="right">{{ label }}</slot>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  right: {
    type: Boolean,
    default: false
  },
  label: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>
