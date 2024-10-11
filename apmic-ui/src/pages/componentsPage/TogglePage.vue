<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">Toggle</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A simple Toggle button.</div>
      <div>
        Use label props to put text inside, you can also set the label to show on right by using
        right props.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <ToggleSwitch v-model="isToggle" label="On Left" toggleOnColor="red" />
        <ToggleSwitch v-model="isToggle" right label="On Right" />
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
        <ToggleSwitch v-model="isToggle" disabled label="On Left" />
        <ToggleSwitch v-model="isToggle" right disabled label="On Right" />
      </div>

      <CodeSnippet :code="checkboxDisableCode" language="xml" />
    </div>

    <!-- Customize -->
    <div>
      <div class="f:30 f:bold">Customize</div>
      <div>You can customize the toggle color with preset classes.</div>
      <div>
        offColor, onColor controls the bar. toggleOffColor, toggleOnColor controls the circle area.
      </div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <ToggleSwitch v-model="isToggle" offColor="purple" onColor="pink" />
        <ToggleSwitch v-model="isToggle" toggleOffColor="black" toggleOnColor="yellow" />
      </div>

      <CodeSnippet :code="checkboxCustomizeCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import ToggleSwitch from '@/components/ToggleSwitch.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import { ref } from 'vue'

const isToggle = ref(false)

const checkboxCode = `<ToggleSwitch v-model="isToggle" label="On Left" />
<ToggleSwitch v-model="isToggle" right label="On Right" />`

const checkboxDisableCode = `<ToggleSwitch v-model="isToggle" disabled label="On Left" />
<ToggleSwitch v-model="isToggle" right disabled label="On Right" />`

const checkboxCustomizeCode = `<ToggleSwitch v-model="isToggle" offColor="purple" onColor="pink" />
<ToggleSwitch v-model="isToggle" toggleOffColor="black" toggleOnColor="yellow" />`
</script>
