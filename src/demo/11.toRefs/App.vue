<template>
  <fieldset>
    <legend>reactive</legend>
    foo: <input type="text" v-model="state.foo">
    bar: <input type="text" v-model="state.bar">

  </fieldset>
  <hr>
  <fieldset>
    <legend>toRefs</legend>
    foo: <input type="text" v-model="foo">
    bar: <input type="text" v-model="bar">
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    const state = reactive({
      foo: 1,
      bar: 2
    })
    const stateAsRefs = toRefs(state)
    const {foo} = stateAsRefs
    function getstate() {
      const stateAsRefs = toRefs(state)
      return stateAsRefs
    }
    const {bar} = getstate()
    return {
      state,
      foo,
      bar
    }
  }
})
</script>

<style>
</style>