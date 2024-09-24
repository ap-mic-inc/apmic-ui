<template>
  <div class="flex flex:col flex-grow:1 w:100vw h:100vh">
    <header class="row ai:center jc:space-between p:20|10">
      <router-link :to="{ name: 'HomePage' }">
        <img class="w:200" :src="logo" alt="Brand Logo" />
      </router-link>
      <!-- <CommonBtn flat @click="toggleTheme">
        <template #icon>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g fill="none">
              <circle cx="12" cy="12" r="9" stroke="currentColor" stroke-width="2" />
              <path fill="currentColor" d="M18.364 5.636A9 9 0 0 0 5.636 18.364L12 12z" />
            </g>
          </svg>
        </template>
      </CommonBtn> -->
    </header>
    <div
      class="grid grid-cols:2 grid-auto-flow:column grid-template-columns:minmax(120px,250px) h:full"
    >
      <div class="w:250 px:16">
        <ListItem link :list="lists" />
      </div>
      <main class="">
        <router-view class="h:calc(100vh-106px-65px)" />
        <footer class="abs bottom:0 w:calc(100%-250px) p:20 text:center bt:1|solid|#BFCFD4">
          Copyright © 2024 APMIC, All Rights Reserved.
        </footer>
      </main>
    </div>
  </div>
</template>

<script setup>
import logo from '/Apmic Logo Bold.svg'
import { ref } from 'vue'
import ListItem from '@/components/ListItem.vue'

const lists = ref([
  { title: 'Description', dest: 'DescriptionPage' },
  {
    title: 'Components',
    subItems: [
      { name: 'Button', dest: 'BtnPage' },
      { name: 'Checkbox', dest: 'CheckboxPage' },
      { name: 'Toggle', dest: 'TogglePage' },
      { name: 'DropDown', dest: 'DropDownPage' },
      { name: 'List', dest: 'ListPage' },
      { name: 'CollapsibleBlock', dest: 'CollapsibleBlockPage' },
      { name: 'InputBox', dest: 'InputBoxPage' }
    ]
  }
])
</script>
