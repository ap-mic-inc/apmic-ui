<template>
  <div class="rel pb:20" @click="focusInput">
    <div
      ref="inputComponentRef"
      class="px:16 h:44 r:4 transition:all|200ms color:#BFCFD4_#input::placeholder color:#27353A:hover:not(:disabled)_#input::placeholder"
      :class="{
        'b:none!': borderless,
        [`b:1|solid|${borderColor}!`]: isValid && !isFocused,
        'b:1|solid|#d21b0f!': !isValid,
        [`b:1|solid|${focusColor}!`]: isFocused,
        'cursor:text': !disabled,
        'cursor:not-allowed': disabled
      }"
    >
      <div class="flex flex:row ai:center">
        <slot name="append" class="flex-basis:min"></slot>
        <input
          id="input"
          ref="inputRef"
          :value="modelValue"
          :placeholder="placeholder"
          class="flex-basis:full h:42 p:0 outline:none:focus-visible b:none transition:all|200ms::placeholder color:#27353A:focus-visible"
          :class="{ 'mx:16': hasAppendContent, disabled }"
          :disabled="disabled"
          @input="updateValue"
          @blur="runValidation"
          @focus="runValidation"
        />
        <slot name="prepend" class="flex-basis:min"></slot>
      </div>
    </div>
    <div
      class="abs bottom:0 left:16 pt:4 color:red h:24"
      :class="{ invisible: isValid, visible: !isValid }"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { computed, ref, useSlots, watch } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  rules: {
    type: Function,
    default: () => ({ isValid: true, errorMessage: '' })
  },
  placeholder: {
    type: String,
    default: 'Enter text...'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  borderless: {
    type: Boolean,
    default: false
  },
  borderColor: {
    type: String,
    default: '#BFCFD4'
  },
  focusColor: {
    type: String,
    default: '#27353A'
  }
})

const emit = defineEmits(['update:modelValue'])

const inputRef = ref(null)
const inputComponentRef = ref(null)
const isValid = ref(true)
const isFocused = ref(false)
const errorMessage = ref('')

const slots = useSlots()
const hasAppendContent = computed(() => !!slots.append)

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

const runValidation = () => {
  const result = props.rules(props.modelValue)
  isValid.value = result.isValid
  errorMessage.value = result.errorMessage
}

const focusInput = () => {
  if (!props.disabled) {
    inputRef.value.focus()
    document.addEventListener('click', handleClickOutside)
    isFocused.value = true
  }
}

const handleClickOutside = (e) => {
  if (inputComponentRef.value && !inputComponentRef.value.contains(e.target)) {
    isFocused.value = false
    runValidation()
    document.removeEventListener('click', handleClickOutside)
  }
}

watch(() => props.modelValue, runValidation)
</script>
