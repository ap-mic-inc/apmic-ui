<template>
  <div class="">
    <input type="checkbox" :checked="modelValue" class="hidden" />
    <div @click="toggle" class="rel flex ai:center cursor:pointer">
      <div
        class="w:35 h:15 r:100 transition:all|300ms"
        :class="modelValue ? 'bg:#CEE7EF' : 'bg:#82A1AB'"
      ></div>
      <div
        class="abs h:20 w:20 round box-shadow:0|0|0|10|rgba(0,0,0,0.1):hover box-shadow:0|0|0|10|rgba(0,0,0,0.5):active transition:all|300ms"
        :class="modelValue ? 'bg:#0797C7 translateX(17)' : 'bg:white'"
      ></div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const toggle = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
