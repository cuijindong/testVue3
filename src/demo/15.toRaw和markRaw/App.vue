<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, isReactive, markRaw, reactive, toRaw } from 'vue'
export default defineComponent({
  setup() {
    let obj = {}
    let Pobj = reactive(obj)
    console.log(toRaw(Pobj) === obj)
    const foo = markRaw({name: 'markRaw'})
    const bar = reactive({foo})
    console.log(bar, isReactive(bar), isReactive(bar.foo))
  }
})
</script>

<style>
</style>