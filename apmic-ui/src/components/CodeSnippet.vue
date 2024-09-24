<template>
  <div class="">
    <div class="flex ai:center jc:space-between p:12|8">
      <div class="f:12">HTML</div>
      <CommonBtn v-if="!defaultShow" flat class="p:8!" @click="isShowCode = !isShowCode">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 16 16">
          <path
            fill="currentColor"
            d="m11.28 3.22l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.749.749 0 0 1-1.275-.326a.75.75 0 0 1 .215-.734L13.94 8l-3.72-3.72a.749.749 0 0 1 .326-1.275a.75.75 0 0 1 .734.215m-6.56 0a.75.75 0 0 1 1.042.018a.75.75 0 0 1 .018 1.042L2.06 8l3.72 3.72a.749.749 0 0 1-.326 1.275a.75.75 0 0 1-.734-.215L.47 8.53a.75.75 0 0 1 0-1.06Z"
          />
        </svg>
      </CommonBtn>
    </div>
    <CollapsibleBlock :isShow="isShowCode || defaultShow">
      <pre><code class="rb:4" :class="language" ref="codeBlock"></code></pre>
    </CollapsibleBlock>
  </div>
</template>

<script setup>
import CommonBtn from '@/components/CommonBtn.vue'
import { onMounted, ref, watch } from 'vue'
import CollapsibleBlock from './CollapsibleBlock.vue'
import hljs from 'highlight.js'
// import 'highlight.js/styles/github.css'
import 'highlight.js/styles/atom-one-dark.css'

const props = defineProps({
  code: String,
  language: String,
  defaultShow: Boolean
})

const codeBlock = ref(null)
const isShowCode = ref(false)

const highlightCode = () => {
  if (codeBlock.value) {
    codeBlock.value.textContent = props.code
    if (props.language) {
      hljs.highlightElement(codeBlock.value)
    } else {
      hljs.highlightAuto(codeBlock.value)
    }
  }
}

onMounted(highlightCode)
watch(() => props.code, highlightCode)
</script>
