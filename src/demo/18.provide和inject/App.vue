<template>
  <h3>App</h3>
  <div>color: {{color}}</div>
  <button @click="upDate('red')">红</button>
  <button @click="upDate('yellow')">黄</button>
  <button @click="upDate('blue')">蓝</button>
  <hr>
  <child></child>
</template>

<script lang="ts">
import child from './components/child.vue'
import { defineComponent, provide, ref } from 'vue'
export default defineComponent({
  components: {
    child
  },
  setup() {
    const color = ref('red')
    provide('color', color)
    const upDate = (item: string) => {
      color.value = item
    }
    return {
      color,
      upDate
    }
  }
})
</script>

<style>
</style>