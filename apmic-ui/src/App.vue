<template>
  <CSSRuntimeProvider :config="config">
    <header>
      <div class="font:40 font:heavy italic m:50 text:center">APMIC-UI</div>
    </header>

    <main>
      <div class="p:50 flex flex:col gap:20">
        <section class="b:2|solid|yellow p:50 r:4 flex flex:col gap:20 bg:#dddddd">
          <h2 class="color:black">Button Section</h2>
          <section>
            <h4 class="color:black">Normal Status</h4>
            <div class="flex flex:row gap:20 mt:4">
              <CommonBtn dark class="bg:#27353a color:white" @click="handleClick">Dark</CommonBtn>
              <CommonBtn light class="bg:#F6F8F9 f:regular!" @click="handleClick">Light</CommonBtn>
              <CommonBtn outline light class="bg:white" @click="handleClick">Outline</CommonBtn>
              <CommonBtn flat @click="handleClick">
                <template #icon>
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
                </template>
                With Icon
              </CommonBtn>
              <CommonBtn flat @click="handleClick">
                <template #icon>
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
                </template>
              </CommonBtn>
              <CommonBtn flat dense @click="handleClick">
                <template #icon>
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
                </template>
                Dense
              </CommonBtn>
            </div>
          </section>
          <section>
            <h4 class="color:black">Disabled Status</h4>
            <div class="flex flex:row gap:20 mt:4">
              <button disabled class="btn dark color:white bg:#bfcfd4:disabled">#BFCFD4</button>
              <button disabled class="btn dark bg:#bfcfd4 color:white filter:opacity(0.5):disabled">
                Opacity(0.5)
              </button>
              <button
                disabled
                class="btn light bg:#F6F8F9 color:primary f:regular! bg:#ebf0f2:disabled"
              >
                Light
              </button>
              <button disabled class="btn outline bg:white color:primary">Outline</button>
              <button disabled class="btn flat">
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
              <button disabled class="btn flat">
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
              <button disabled class="btn flat dense">
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
        <section class="b:2|solid|yellow p:50 r:4 bg:#dddddd">
          <h2 class="color:black">Input Text Section</h2>
          <div class="flex flex:row gap:20">
            <InputBox
              v-model="input"
              :validate-input="customValidation"
              placeholder="Rules: text length < 3"
            />
            {{ isValid }}
          </div>
        </section>
        <section class="b:2|solid|yellow p:50 r:4 bg:#dddddd">
          <h2 class="color:black">Radio Section</h2>
          <div class="flex flex:row gap:20 fit">
            <CheckBox v-model="isChecked" />
          </div>
        </section>
        <section class="b:2|solid|yellow p:50 r:4 bg:#dddddd">
          <h2 class="color:black">Toggle Section</h2>
          <div class="flex flex:row gap:20 fit">
            <ToggleSwitch v-model="isToggle" />
          </div>
        </section>
        <section class="b:2|solid|yellow p:50 r:4 bg:#dddddd">
          <h2 class="color:black">Select Section</h2>
          <div class="flex flex:row gap:20 fit rel">
            <DropdownMenu
              v-model="selectedValue"
              :options="dropdownOptions"
              placeholder="Choose an option"
              class="w:200"
            />
          </div>
        </section>
      </div>
    </main>
  </CSSRuntimeProvider>
</template>

<script setup>
import CSSRuntimeProvider from '@master/css.vue'
import config from '../master.css'
import { ref } from 'vue'
import CheckBox from './components/CheckBox.vue'
import ToggleSwitch from './components/ToggleSwitch.vue'
import InputBox from './components/InputBox.vue'
import DropdownMenu from './components/DropdownMenu.vue'
import CommonBtn from './components/CommonBtn.vue'

const input = ref('')
const isValid = ref(true)
const isChecked = ref(false)
const isToggle = ref(false)

const selectedValue = ref(null)
const dropdownOptions = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' }
]

const customValidation = (value) => {
  if (value.length < 3) {
    return {
      isValid: false,
      errorMessage: 'Text length should be less than 3 characters'
    }
  }
  return {
    isValid: true,
    errorMessage: ''
  }
}
</script>

<style scoped></style>
