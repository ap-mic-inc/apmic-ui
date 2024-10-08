<template>
  <div
    class="flex ai:center cursor:pointer box-shadow:0|0|0|10|rgba(0,0,0,0.1):hover:not(.disabled)>#checkbox box-shadow:0|0|0|10|rgba(0,0,0,0.3):active:not(.disabled)>#checkbox"
    :class="{ disabled }"
    @click="handleCheckBoxClick"
  >
    <slot v-if="!right">{{ label }}</slot>
    <div
      id="checkbox"
      class="flex ai:center round transform:center transition:all|300ms m:10 transition:none!:active"
    >
      <input type="checkbox" :checked="modelValue" @change="handleCheckboxChange" class="hidden" />
      <div
        id="tickbox"
        class="h:20 w:20 r:2 color:#BFCFD4 overflow:hidden"
        :class="{
          'b:2 b:solid': !modelValue
        }"
        :disabled="disabled"
      >
        <svg
          v-if="modelValue"
          xmlns="http://www.w3.org/2000/svg"
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          class="bg:#0797c7"
        >
          <path fill="white" d="M21 7L9 19l-5.5-5.5l1.41-1.41L9 16.17L19.59 5.59z" />
        </svg>
      </div>
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

const handleCheckboxChange = (event) => {
  if (!props.disabled) {
    emit('update:modelValue', event.target.checked)
  }
}

const handleCheckBoxClick = () => {
  if (!props.disabled) {
    emit('update:modelValue', !props.modelValue)
  }
}
</script>
