<template>
  <h3>son</h3>
  <span :style="`color: ${color}`">文字颜色</span>
</template>

<script lang="ts">
import { defineComponent, inject } from 'vue'
export default defineComponent({
  setup() {
    const color = inject('color')
    return {
      color
    }
  }
})
</script>

<style>
</style>