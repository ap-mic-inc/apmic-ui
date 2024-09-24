<template>
  <CSSRuntimeProvider :config="config">
    <router-view />
  </CSSRuntimeProvider>
</template>

<script setup>
import CSSRuntimeProvider from '@master/css.vue'
import config from '../master.css'
</script>

<style scoped></style>
