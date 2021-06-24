<template>
  <h1>App父组件</h1>
  <h3>msg:{{msg}}</h3>
  <button @click="msg += 'upDate'">upDate</button>
  <hr>
  <child :msg="msg"></child>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'
import child from './components/child.vue'
export default defineComponent({
  components: {
    child
  },
  setup() {
    const msg = ref('Hello')
    return {
      msg
    }
  }
})
</script>

<style>
</style>