<template>
  <h1>{{number}}</h1>
  <div>
    <button @click="add">+</button>
    <button @click="subtract">-</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // ref函数：定义一个响应式数据，返回一个Ref对象。一般用于定义基本类的响应数据
    const number:Ref<number> = ref(0)
    function subtract():any {
      number.value--
    }
    function add():any {
      number.value++
    }
    return {
      number,
      subtract,
      add
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
