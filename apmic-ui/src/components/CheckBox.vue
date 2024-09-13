<template>
  <div
    class="cursor:pointer flex ai:center round bg:rgba(0,0,0,0.1):hover:not(:disabled) transition:all|300ms p:10 bg:rgba(0,0,0,0.18)!:not(:disabled):active transition:none!:active"
    @click="handleCheckBoxClick"
  >
    <input
      type="checkbox"
      :checked="modelValue"
      @change="handleCheckboxChange"
      class="w:16 h:16 cursor:pointer b:1|solid|#BFCFD4"
    />
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

const handleCheckboxChange = (event) => {
  emit('update:modelValue', event.target.checked)
}

const handleCheckBoxClick = () => {
  emit('update:modelValue', !props.modelValue)
}
</script>
