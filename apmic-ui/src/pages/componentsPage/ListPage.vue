<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">List</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A combination of button and subItems.</div>
      <div>Use list props to put array inside, you can also pass a subItems within.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <ListItem :list="lists" class="w:200" />
      </div>

      <CodeSnippet :code="dropListCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import ListItem from '@/components/ListItem.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import { ref } from 'vue'

const lists = ref([
  { title: 'Description', dest: 'DescriptionPage' },
  {
    title: 'With SubItems',
    subItems: [
      { name: 'Button', dest: 'BtnPage' },
      { name: 'Checkbox', dest: 'CheckboxPage' },
      { name: 'Toggle', dest: 'TogglePage' },
      { name: 'DropDown', dest: 'DropDownPage' },
      { name: 'List', dest: 'ListPage' },
      { name: 'CollapsibleBlock', dest: 'CollapsibleBlockPage' },
      { name: 'InputBox', dest: 'InputBoxPage' }
    ]
  },
  { title: 'List 3' }
])
const dropListCode = `<ListItem :list="lists" class="w:200" />

const lists = ref([
  { title: 'Description', dest: 'DescriptionPage' },
  {
    title: 'With SubItems',
    subItems: [
      { name: 'Button', dest: 'BtnPage' },
      { name: 'Checkbox', dest: 'CheckboxPage' },
      { name: 'Toggle', dest: 'TogglePage' },
      { name: 'DropDown', dest: 'DropDownPage' },
      { name: 'List', dest: 'ListPage' },
      { name: 'CollapsibleBlock', dest: 'CollapsibleBlockPage' },
      { name: 'InputBox', dest: 'InputBoxPage' }
    ]
  },
  { title: 'List 3' }
])
`
</script>
