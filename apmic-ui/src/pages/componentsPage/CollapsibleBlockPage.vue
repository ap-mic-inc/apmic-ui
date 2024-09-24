<template>
  <div class="p:20 flex flex:col gap:20 overflow:auto">
    <div class="f:40 f:bold">CollapsibleBlock</div>

    <!-- Example -->
    <div>
      <div class="f:30 f:bold">Example</div>
      <div>A block which can be collapse smoothly.</div>
      <div>Use isShow to control whether it is expand.</div>
    </div>

    <div class="flex flex:col b:1|solid|#BFCFD4 bg:#F6F8F9 r:4">
      <div class="flex flex:row gap:10 p:10 bb:1|solid|#BFCFD4 bg:white rt:4">
        <div class="w:150">
          <CommonBtn light class="w:full bg:blue color:white" @click="isShow = !isShow"
            >Click Me</CommonBtn
          >

          <CollapsibleBlock :isShow="isShow">
            <div class="p:16">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </div>
          </CollapsibleBlock>
        </div>
      </div>

      <CodeSnippet :code="collapseCode" language="xml" />
    </div>
  </div>
</template>

<script setup>
import CollapsibleBlock from '@/components/CollapsibleBlock.vue'
import CodeSnippet from '@/components/CodeSnippet.vue'
import CommonBtn from '@/components/CommonBtn.vue'
import { ref } from 'vue'

const isShow = ref(false)

const collapseCode = `<CollapsibleBlock :isShow="isShow">
  <div class="p:16">
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
    eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
    architecto suscipit iste eveniet doloribus ullam aliquid.
  </div>
</CollapsibleBlock>

const isShow = ref(false)
`
</script>
