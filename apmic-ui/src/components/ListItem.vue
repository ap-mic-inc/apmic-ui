<template>
  <ul v-for="(item, index) in lists" :key="index" class="pl:0 h:56">
    <div
      v-if="item.subItems"
      class="flex flex:row ai:center jc:space-between cursor:pointer p:16|24 flat"
      @click="toggleActive(index)"
    >
      <div class="f:14 color:#27353A">{{ item.title }}</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        class="transition:transform|200ms"
        :class="{ 'rotate(180)': item.isActive }"
      >
        <path
          fill="currentColor"
          d="M11.646 15.146L5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0"
        />
      </svg>
    </div>
    <router-link
      v-else-if="link"
      class="block w:full cursor:pointer p:16|24 flat text-decoration:none color:#27353A!"
      :to="{ name: item.dest }"
      >{{ item.title }}
    </router-link>
    <div
      v-else
      class="block w:full cursor:pointer p:16|24 flat text-decoration:none color:#27353A!"
    >
      {{ item.title }}
    </div>

    <CollapsibleBlock v-if="link" :isShow="item.isActive">
      <router-link
        v-for="i in item.subItems"
        :key="i"
        :to="{ name: i.dest }"
        class="cursor:pointer flat f:12 text-decoration:none color:#27353A!"
      >
        <li class="p:8|28 list-style:none flat">{{ i.name }}</li>
      </router-link>
    </CollapsibleBlock>
    <CollapsibleBlock v-else :isShow="item.isActive">
      <li
        v-for="i in item.subItems"
        :key="i"
        class="p:8|28 cursor:pointer flat f:12 color:#27353A!"
      >
        {{ i.name }}
      </li>
    </CollapsibleBlock>
  </ul>
</template>

<script setup>
import { ref, watch } from 'vue'
import CollapsibleBlock from './CollapsibleBlock.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true,
    default: () => []
  },
  link: {
    type: Boolean,
    default: false
  }
})

const lists = ref(props.list.map((item) => ({ ...item, isActive: false })))

const toggleActive = (index) => {
  lists.value[index].isActive = !lists.value[index].isActive
}

watch(
  () => props.list,
  (newVal) => {
    lists.value = newVal.map((item) => ({ ...item, isActive: false }))
  }
)
</script>
