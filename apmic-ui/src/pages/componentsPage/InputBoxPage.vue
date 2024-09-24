<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">Input Box</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A block which can be collapse smoothly.</div>
      <div>Use isShow to control whether it is expand.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <InputBox v-model="input" placeholder="Text here." />
      </div>

      <CodeSnippet :code="inputCode" language="xml" />
    </div>

    <!-- Validation -->
    <div>
      <div class="f:30 f:bold">Validation</div>
      <div>
        You can pass a validate function into rules props, it will check once you click and
        out-focus on it.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <InputBox v-model="input" :rules="customValidation" placeholder="Rules: text length > 3" />
      </div>

      <CodeSnippet :code="inputValidateCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from '@/components/CodeSnippet.vue'
import InputBox from '@/components/InputBox.vue'
import { ref } from 'vue'

const input = ref('')

const customValidation = (value) => {
  if (value.length < 3) {
    return {
      isValid: false,
      errorMessage: 'Erorr'
    }
  }
  return {
    isValid: true,
    errorMessage: ''
  }
}

const inputCode = `<InputBox v-model="input" placeholder="Text here." />

const input = ref('')`

const inputValidateCode = `<InputBox v-model="input" :rules="customValidation" placeholder="Rules: text length > 3" />

const customValidation = (value) => {
  if (value.length < 3) {
    return {
      isValid: false,
      errorMessage: 'Erorr'
    }
  }
  return {
    isValid: true,
    errorMessage: ''
  }
}`
</script>
