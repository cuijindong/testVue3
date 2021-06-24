<template>
  <div>
    <!-- change将在原生的change事件触发时触发，不用通过child组件手动emit触发 -->
    <child :msg="msg" test='test' @change="change">
      <h1>{{msg}}</h1>
    </child>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref} from 'vue'
import child from './components/child.vue'
export default defineComponent({
  name:"test",
  components: {
    child
  },
  setup() {
    const msg = ref('this is props msg')
    const change = () => {
      console.log('change')
    }
    return {
      msg,
      change
    }
  }
})
</script>

<style>
</style>