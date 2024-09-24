<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div>
      <div class="f:40 f:bold">Start using our components!</div>
      <div>We aim to provide a flexible and relatively user-friendly components library.</div>
    </div>
    <div class="mt:20">
      <div class="f:20 f:bold">Quick Start</div>
      <div class="">Using npm to install the library first.</div>
      <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4 mt:10">
        <CodeSnippet code="npm install xxx" language="cmake" :defaultShow="true" />
      </div>
      <div class="mt:10">
        ...And kindly check our components page and look for the sample code! There you go!
      </div>
    </div>
  </div>
</template>

<script setup>
import CodeSnippet from '@/components/CodeSnippet.vue'
</script>
