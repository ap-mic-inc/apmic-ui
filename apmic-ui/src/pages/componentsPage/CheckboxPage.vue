<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">CheckBox</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A simple CheckBox button.</div>
      <div>
        Use label props to put text inside, you can also set the label to show on right by using
        right props.
      </div>
      <div>Besides, you can use id: checkbox, tickbox to modify css class inside.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CheckBox v-model="isChecked" label="Left label"></CheckBox>
        <CheckBox v-model="isChecked" right label="Right label"></CheckBox>
      </div>

      <CodeSnippet :code="checkboxCode" language="xml" />
    </div>

    <!-- Disable -->
    <div>
      <div class="f:30 f:bold">Disable</div>
      <div>Disable Status, use it as props.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <CheckBox v-model="isChecked" disabled label="Left label"></CheckBox>
        <CheckBox v-model="isChecked" right disabled label="Right label"></CheckBox>
      </div>

      <CodeSnippet :code="checkboxDisableCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import CheckBox from '@/components/CheckBox.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import { ref } from 'vue'

const isChecked = ref(false)

const checkboxCode = `<CheckBox v-model="isChecked" label="Left label"></CheckBox>
<CheckBox v-model="isChecked" right label="Right label"></CheckBox>`

const checkboxDisableCode = `<CheckBox v-model="isChecked" disabled label="Left label"></CheckBox>
<CheckBox v-model="isChecked" right disabled label="Right label"></CheckBox>`
</script>
