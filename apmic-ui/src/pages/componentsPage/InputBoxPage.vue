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

    <!-- Customize -->
    <div>
      <div class="f:30 f:bold">Customize</div>
      <div>
        You can pass a validate function into rules props, it will check once you click and
        out-focus on it.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <InputBox v-model="input" placeholder="Rules: text length > 3">
          <template #append>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="black"
                d="M12 3c4.97 0 9 3.58 9 8s-6 10-9 10s-9-5.58-9-10s4.03-8 9-8m-1.69 7.93C9.29 9.29 7.47 8.58 6.25 9.34s-1.38 2.71-.36 4.35c1.03 1.64 2.85 2.35 4.07 1.59c1.22-.78 1.37-2.71.35-4.35m3.38 0c-1.02 1.64-.87 3.57.35 4.35c1.22.76 3.04.05 4.07-1.59c1.02-1.64.86-3.59-.36-4.35s-3.04-.05-4.06 1.59M12 17.75c-2 0-2.5-.75-2.5-.75c0 .03.5 2 2.5 2s2.5-2 2.5-2s-.5.75-2.5.75"
              />
            </svg>
          </template>
          <template #prepend>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="black"
                d="M12 3c4.97 0 9 3.58 9 8s-6 10-9 10s-9-5.58-9-10s4.03-8 9-8m-1.69 7.93C9.29 9.29 7.47 8.58 6.25 9.34s-1.38 2.71-.36 4.35c1.03 1.64 2.85 2.35 4.07 1.59c1.22-.78 1.37-2.71.35-4.35m3.38 0c-1.02 1.64-.87 3.57.35 4.35c1.22.76 3.04.05 4.07-1.59c1.02-1.64.86-3.59-.36-4.35s-3.04-.05-4.06 1.59M12 17.75c-2 0-2.5-.75-2.5-.75c0 .03.5 2 2.5 2s2.5-2 2.5-2s-.5.75-2.5.75"
              />
            </svg>
          </template>
        </InputBox>
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
