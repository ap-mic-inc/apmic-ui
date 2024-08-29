<template>
  <CSSRuntimeProvider :config="config">
    <header>
      <div class="font:40 font:heavy italic m:50 text:center">APMIC-UI</div>
    </header>

    <main>
      <div class="p:50 flex flex:col gap:20">
        <section class="b:2|solid|yellow p:50 r:4 flex flex:col gap:20 bg:white">
          <h2>Button Section</h2>
          <section>
            <h4>Normal Status</h4>
            <div class="flex flex:row gap:20 mt:4">
              <button
                class="btn dark bg:#27353a color:white"
                :class="btnClass"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Dark
              </button>
              <button
                class="btn light bg:#F6F8F9 color:primary f:regular!"
                :class="btnClassLight"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Light
              </button>
              <button
                class="btn outline light bg:white"
                :class="btnClassLight"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Outline
              </button>
              <button
                class="btn flat"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                With Icon
              </button>
              <button
                class="btn flat"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </button>
              <button
                class="btn flat dense"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Dense
              </button>
            </div>
          </section>
          <section>
            <h4>Disabled Status</h4>
            <div class="flex flex:row gap:20 mt:4">
              <button
                disabled
                class="btn dark color:white bg:#bfcfd4:disabled"
                :class="btnClass"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                #BFCFD4
              </button>
              <button
                disabled
                class="btn dark bg:#bfcfd4 color:white filter:opacity(0.5):disabled"
                :class="btnClass"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Opacity(0.5)
              </button>
              <button
                disabled
                class="btn dark bg:#bfcfd4 color:white filter:saturate(0.5):disabled"
                :class="btnClass"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Saturate(0.5)
              </button>
              <button
                disabled
                class="btn light bg:#F6F8F9 color:primary f:regular! bg:#ebf0f2:disabled"
                :class="btnClassLight"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Light
              </button>
              <button
                disabled
                class="btn outline bg:white color:primary"
                :class="btnClassLight"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                Outline
              </button>
              <button
                disabled
                class="btn flat"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                With Icon
              </button>
              <button
                disabled
                class="btn flat"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              </button>
              <button
                disabled
                class="btn flat dense"
                :class="btnClassFlat"
                @mousedown="handleMouseDown"
                @mouseup="handleMouseUp"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
                Dense
              </button>
            </div>
          </section>
        </section>
        <section class="b:2|solid|yellow p:50 r:4 bg:white">
          <h2>Input Text Section</h2>
          <div class="flex flex:row gap:20">
            <input
              v-model="input"
              class="p:16 h:44 r:4 outline:none:focus-visible b:1|solid|#BFCFD4 b:1|solid|#27353A:focus-visible transition:all|200ms color:#BFCFD4 color:#27353A:hover:not(:disabled) color:#27353A:focus-visible"
              placeholder="placeholder"
            />
            <div class="flex flex:col gap:4">
              <input
                v-model="input"
                class="p:16 h:44 r:4 outline:none:focus-visible b:1|solid|#27353A:focus-visible transition:all|200ms color:#BFCFD4 color:#27353A:hover:not(:disabled) color:#27353A:focus-visible"
                :class="`${isValid ? 'b:1|solid|#BFCFD4' : 'b:1|solid|#d21b0f!'}`"
                @input="validateInput"
                placeholder="Error show case"
              />
              <span v-show="!isValid" class="color:red">{{ errorMessage }}</span>
            </div>
            {{ isValid }}
          </div>
        </section>
      </div>
    </main>
  </CSSRuntimeProvider>
</template>

<script setup>
import CSSRuntimeProvider from '@master/css.vue'
import config from '../master.css'
import { ref, onBeforeUnmount } from 'vue'

const input = ref('')
const isValid = ref(true)
const errorMessage = ref('')

const btnClass = ref('')
const btnClassLight = ref('')
const btnClassFlat = ref('')

const validateInput = () => {
  // Example validation: input should be at least 3 characters long
  if (input.value.length < 3) {
    isValid.value = false
    errorMessage.value = 'Hint Text'
  } else {
    isValid.value = true
    errorMessage.value = ''
  }
}

const handleMouseDown = () => {
  btnClass.value = 'filter:brightness(1.6)!:not(:disabled) transition:none!'
  btnClassLight.value = 'filter:brightness(0.82)!:not(:disabled) transition:none!'
  btnClassFlat.value = 'bg:rgba(0,0,0,0.18)!:not(:disabled) transition:none!'
  window.addEventListener('mouseup', handleWindowMouseUp)
}

const handleWindowMouseUp = () => {
  console.log('Mouse Released Outside the Button')
  btnClass.value = 'filter:brightness(1)'
  btnClassLight.value = 'filter:brightness(1)'
  btnClassFlat.value = 'bg:none'
  window.removeEventListener('mouseup', handleWindowMouseUp)
}

onBeforeUnmount(() => {
  window.removeEventListener('mouseup', handleWindowMouseUp)
})
</script>

<style scoped></style>
