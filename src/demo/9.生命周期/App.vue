<template>
  <h2>App</h2>
  <button @click="isShow = !isShow">显隐</button>
  <hr>
  <Child v-if="isShow"></Child>
</template>

<script lang="ts">
import Child from './components/child.vue'
import { defineComponent, ref } from 'vue'
export default defineComponent({
  components: {
    Child
  },
  setup() {
    const isShow = ref(true)
    return {
      isShow
    }
  }
})
</script>

<style>
</style>