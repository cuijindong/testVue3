<template>
  <h2>自定义hook</h2>
  <span>x:{{x}}</span>
  <span>y:{{y}}</span>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
import {getPoint} from './hook/mousePoint'
export default defineComponent({
  setup() {
    const {x, y} = getPoint()
    return {
      x,
      y
    }
  }
})
</script>

<style>
</style>