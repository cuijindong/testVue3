<template>
  <h1>reactive使用</h1>
  <div>姓名：{{person.name}}</div>
  <div>年龄：{{person.age}}</div>
  <div>媳妇：{{person.wife}}</div>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, reactive, ref} from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    // 返回对象的响应式副本(Proxy),建议只使用响应式 proxy，避免依赖原始对象。
    const person = reactive({
      name: 'xx',
      age: 12,
      wife: 'xx'
    })
    const update = () => {
      person.wife = 'cc'
    }
    // reactive会解包所有Refs，同时维持ref的响应性。
    // obj的get取值是count.value
    // obj的set设置是count.value
    // 当将 ref 分配给 reactive property 时，ref 将被自动解包。
    const count = ref(1)
    const obj = reactive({count})
    console.log(count.value === obj.count) // true
    return {
      person,
      update
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
