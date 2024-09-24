<template>
  <div
    class="flex ai:center cursor:pointer box-shadow:0|0|0|10|rgba(0,0,0,0.1):hover:not(.disable)>#checkbox box-shadow:0|0|0|10|rgba(0,0,0,0.5):active:not(.disable)>#checkbox"
    :class="{ disable }"
    @click="handleCheckBoxClick"
  >
    <slot v-if="!right">{{ label }}</slot>
    <div
      id="checkbox"
      class="flex ai:center round transform:center transition:all|300ms m:10 transition:none!:active"
    >
      <input
        type="checkbox"
        :checked="modelValue"
        @change="handleCheckboxChange"
        class="w:16 h:16 b:1|solid|#BFCFD4 cursor:pointer cursor:not-allowed:disabled"
        :disabled="disable"
      />
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
  disable: {
    type: Boolean,
    default: false
  }
})
const emit = defineEmits(['update:modelValue'])

const handleCheckboxChange = (event) => {
  if (!props.disable) {
    emit('update:modelValue', event.target.checked)
  }
}

const handleCheckBoxClick = () => {
  if (!props.disable) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>
