<template>
  <div class="rel fit">
    <div
      class="row ai:center jc:space-between gap:8 p:8|16 h:44 w:full r:4 bg:white b:1|solid|#BFCFD4 color:#BFCFD4 color:#27353A:hover:not(:disabled) cursor:pointer transition:all|300ms"
      :class="{ 'b:1|solid|#27353A! color:#27353A!': isActive }"
      @click="toggleDropdown"
    >
      <div>{{ selectedOption || placeholder }}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="transition:transform|200ms"
        :class="{ 'rotate(180)': !isActive }"
      >
        <path
          fill="currentColor"
          d="m12.354 8.854l5.792 5.792a.5.5 0 0 1-.353.854H6.207a.5.5 0 0 1-.353-.854l5.792-5.792a.5.5 0 0 1 .708 0"
        />
      </svg>
    </div>
    <div
      class="abs left:0 top:full w:full r:4 py:4 bg:white box-shadow:0|1|3|#BFCFD4 transform:top transition:all|200ms"
      :class="{ 'scaleY(1)': isActive, 'scaleY(0)': !isActive }"
    >
      <div
        v-for="option in options"
        :key="option.value"
        class="bg:rgba(0,0,0,0.05):hover p:8 cursor:pointer color:#27353A"
        @click="selectOption(option)"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  options: {
    type: Array,
    default: () => []
  },
  placeholder: {
    type: String,
    default: 'Select an option'
  }
})

const emit = defineEmits(['update:modelValue'])

const isActive = ref(false)

const selectedOption = computed(() => {
  const option = props.options.find((opt) => opt.value === props.modelValue)
  return option ? option.label : null
})

const toggleDropdown = () => {
  isActive.value = !isActive.value
}

const selectOption = (option) => {
  emit('update:modelValue', option.value)
  isActive.value = false
}
</script>
