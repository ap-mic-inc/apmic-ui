<template>
  <div ref="selectRef" class="rel fit pb:20 w:200">
    <div
      id="selected-option"
      class="row ai:center jc:space-between gap:8 p:8|16 h:44 w:full r:4 bg:white cursor:pointer color:#27353A:hover:not(:disabled)_#placeholder transition:all|300ms"
      :class="{
        'b:1|solid|#27353A! color:#27353A!': isActive,
        'b:1|solid|#BFCFD4': isValid,
        'b:1|solid|#d21b0f!': !isValid,
        disable
      }"
      @click="toggleDropdown"
    >
      <div>
        <div v-if="selectedOption">
          <slot name="selected-option" :option="selectedOption">
            {{ selectedOption.label || selectedOption.title || selectedOption.name }}
          </slot>
        </div>
        <div v-else id="placeholder" class="color:#BFCFD4 transition:color|300ms">
          <slot name="placeholder">
            {{ placeholder }}
          </slot>
        </div>
      </div>

      <div class="flex ai:center gap:8">
        <svg
          v-if="selectedOption && clearable"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 16 16"
          class="filter:brightness(0.8):hover"
          @click.stop.prevent="clearValue"
        >
          <path
            fill="#adadad"
            fill-rule="evenodd"
            d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M4.22 4.22a.75.75 0 0 1 1.06 0L8 6.94l2.72-2.72a.75.75 0 1 1 1.06 1.06L9.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L8 9.06l-2.72 2.72a.75.75 0 0 1-1.06-1.06L6.94 8L4.22 5.28a.75.75 0 0 1 0-1.06"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          class="transition:transform|200ms"
          :class="{ 'rotate(180)': isActive }"
        >
          <path
            fill="#adadad"
            d="m12.37 15.835l6.43-6.63C19.201 8.79 18.958 8 18.43 8H5.57c-.528 0-.771.79-.37 1.205l6.43 6.63c.213.22.527.22.74 0"
          />
        </svg>
      </div>
    </div>
    <div
      id="options"
      ref="optionsRef"
      class="abs z:99 top:44 w:full r:4 py:4 bg:white box-shadow:0|1|3|#BFCFD4 transform:top transition:all|200ms"
      :class="{ 'scaleY(1)': isActive, 'scaleY(0)': !isActive, [`${leftPosition}`]: true }"
    >
      <div
        v-for="option in options"
        :key="option.value"
        id="options-item"
        class="bg:rgba(0,0,0,0.05):hover p:8 cursor:pointer color:#27353A transition:all|200ms"
        @click="selectOption(event, option)"
      >
        <slot name="option" :option="option">
          {{ option.label || option.title || option.name }}
        </slot>
      </div>
    </div>
    <div
      :class="{ invisible: isValid, visible: !isValid }"
      class="abs bottom:0 left:0 top:44 color:red h:24"
    >
      {{ errorMessage }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  modelValue: {
    type: Object,
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  },
  rules: {
    type: Function,
    default: () => ({ isValid: true, errorMessage: '' })
  },
  clearable: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const selectRef = ref(null)
const optionsRef = ref(null)
const isActive = ref(false)
const isValid = ref(true)
const leftPosition = ref(0)
const errorMessage = ref('')

const selectedOption = computed(() => {
  return props.modelValue
})

const toggleDropdown = () => {
  if (!props.disable) {
    isActive.value = !isActive.value
    document.addEventListener('click', handleClickOutside)
    if (!isActive.value) {
      runValidation()
    }
  }
}

const selectOption = (event, option) => {
  emit('update:modelValue', option)
  isActive.value = false
  document.removeEventListener('click', handleClickOutside)
}

const runValidation = () => {
  const result = props.rules(props.modelValue)
  isValid.value = result.isValid
  errorMessage.value = result.errorMessage
}

const handleClickOutside = (e) => {
  if (selectRef.value && !selectRef.value.contains(e.target)) {
    isActive.value = false
    runValidation()
    document.removeEventListener('click', handleClickOutside)
  }
}

const handleResize = () => {
  if (selectRef.value && optionsRef.value) {
    const optionsRect = optionsRef.value.getBoundingClientRect()
    const viewportWidth = window.innerWidth

    leftPosition.value = optionsRect.width + optionsRect.left > viewportWidth ? 'left:0' : 'right:0'
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  handleResize() // Initial check
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const clearValue = () => {
  emit('update:modelValue', null)
}

watch(() => props.modelValue, runValidation)
</script>
