<template>
  <input type="text" ref="inputRef">
</template>

<script lang="ts">
import { defineComponent, HtmlHTMLAttributes, onMounted, ref } from 'vue'
export default defineComponent({
  setup() {
    const inputRef = ref<HTMLElement | null>(null)
    onMounted(() => {
      inputRef.value && inputRef.value.focus()
    })
    return {
      inputRef
    }
  }
})
</script>

<style>
</style>