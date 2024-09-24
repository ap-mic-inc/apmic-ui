<template>
  <div class="rel flex flex:col gap:4 pb:20">
    <input
      :value="modelValue"
      @input="updateValue"
      class="p:16 h:44 r:4 outline:none:focus-visible b:1|solid|#27353A:focus-visible transition:all|200ms color:#BFCFD4::placeholder color:#27353A:hover:not(:disabled)::placeholder transition:all|200ms::placeholder color:#27353A:focus-visible"
      :class="{ 'b:1|solid|#BFCFD4': isValid, 'b:1|solid|#d21b0f!': !isValid }"
      @blur="runValidation"
      @focus="runValidation"
      :placeholder="placeholder"
    />
    <div
      class="abs bottom:0 left:0 pt:4 color:red h:24"
      :class="{ invisible: isValid, visible: !isValid }"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

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
  }
})

const emit = defineEmits(['update:modelValue'])

const isValid = ref(true)
const errorMessage = ref('')

const updateValue = (event) => {
  emit('update:modelValue', event.target.value)
}

const runValidation = () => {
  const result = props.rules(props.modelValue)
  isValid.value = result.isValid
  errorMessage.value = result.errorMessage
}

watch(() => props.modelValue, runValidation)
</script>
