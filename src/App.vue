<template>
  <div>
    <h1>ref和reactive细节</h1>
    <div>m1: {{m1}}</div>
    <div>m2: {{m2}}</div>
    <div>m3: {{m3}}</div>
    <hr>
    <button @click="update">数据更新</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref} from 'vue'
export default defineComponent({
  name:"test",
  setup() {
    const m1 = ref('lalallala')
    const m2 = reactive({
      name: 'xiaopi',
      wife: {
        name: 'meiyou'
      }
    })
    const m3 = ref({
      name: 'xiaopi',
      wife: {
        name: 'meiyou'
      }
    })
    const update = () => {
      console.log(m3)
      m1.value += '===',
      m2.wife.name += '===',
      m3.value.wife.name += '==='
    }
    return {
      m1, 
      m2,
      m3,
      update
    }
  }
})
</script>

<style>
</style>