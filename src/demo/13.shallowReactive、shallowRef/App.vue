<template>
  <h2>shallowReactive</h2>
  <button @click="update">更新</button>
  自身property：<span>{{state.foo}}</span>
  嵌套property：<span>{{state.nested.bar}}</span>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, shallowReactive, shallowRef } from 'vue'
export default defineComponent({
  setup() {
    const state: any = shallowReactive({
      foo: 1,
      nested: {
        bar: 2
      }
    })
    const state1: any = reactive({})
    const name = ref('test')
    state.name = name
    state1.name = name
    // ref不会被解包
    console.log(state.name,state1.name)
    function update() {
      // state.foo++
      state.nested.bar++
    }
    const test = shallowRef('tset')
    test.value = 'ttt'
    console.log(test)
    return {
      state,
      update
    }
  }
})
</script>

<style>
</style>