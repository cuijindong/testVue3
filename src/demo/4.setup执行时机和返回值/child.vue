<template>
  <h1>child子组件</h1>
  <h3>msg:{{msg}}</h3>
  <h3>name: {{name}}</h3>
  <button @click="getName">test</button>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'
export default defineComponent({
  name:"child",
  props: {
    msg: String
  },
  data() {
    return {
      name: 'dapi',
      age: 1
    }
  },
  mounted() {
    console.log(this)
  },
  beforeCreate() {
    console.log('beforeCreate执行了')
  },
  setup() {
    console.log('setup执行了')
    const name = ref('xiaopi')
    const getName = () => {
      console.log(name, 'setup')
    }
    return {
      name,
      getName
    }
  },
  methods: {
    getName() {
      console.log(this.name, 'methods')
    }
  }
})
</script>

<style>
</style>