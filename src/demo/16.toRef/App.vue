<template>
  <fieldset>
    <legend>reactive</legend>
    state: <span>{{state}}</span>
  </fieldset>
  <hr>
  <fieldset>
    <legend>toRef</legend>
    age: <span>{{age}}</span>
    money: <span>{{money}}</span>
  </fieldset>
  <button @click="upDate">更新</button>
  <hr>
  <child :age="age"></child>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, toRef } from 'vue'
import child from './components/child.vue'
export default defineComponent({
  components: {
    child
  },
  setup() {
    const state = reactive({
      age: 8,
      money: 12
    })
    const age = toRef(state, 'age')
    const money = ref(state.money)
    const upDate = () => {
      age.value++
      money.value++
    }
    return {
      state,
      age,
      money,
      upDate
    }
  }
})
</script>

<style>
</style>