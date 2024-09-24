<template>
  <CSSRuntimeProvider :config="config">
    <!-- <main>
      <div class="p:50 flex flex:col gap:20">
        <section class="b:2|solid|yellow p:50 r:4 bg:">
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
        <section class="b:2|solid|yellow p:50 r:4 bg:">
          <h2 class="color:black">Select Section</h2>
          <div class="flex flex:row gap:20 fit rel">
            <DropdownMenu
              v-model="selectedValue"
              :options="dropdownOptions"
              :validate-input="mustSelect"
              placeholder="Choose an option"
              class="w:200"
            />

            123123123
          </div>
          8789989
        </section>
      </div>
    </main> -->
    <router-view />
  </CSSRuntimeProvider>
</template>

<script setup>
import CSSRuntimeProvider from '@master/css.vue'
import config from '../master.css'

// import { ref } from 'vue'
// import InputBox from './components/InputBox.vue'
// import logo from '/Apmic Logo Bold.svg'

// import { useThemeStore } from './stores/theme'
// const { toggleTheme } = useThemeStore()

// const input = ref('')
// const isValid = ref(true)

// const customValidation = (value) => {
//   if (value.length < 3) {
//     return {
//       isValid: false,
//       errorMessage: 'Text length should be less than 3 characters'
//     }
//   }
//   return {
//     isValid: true,
//     errorMessage: ''
//   }
// }
</script>

<style scoped></style>
