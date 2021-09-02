<template>
  
</template>

<script lang="ts">
import { defineComponent, isProxy, isReactive, isReadonly, isRef, reactive, readonly, ref } from 'vue'
export default defineComponent({
  setup() {
    const ref_c = ref('')
    const reactive_c = reactive({})
    const readonly_c = readonly({})
    console.log(isRef(ref_c), isRef(reactive_c),isRef(readonly_c))
    console.log(isReactive(ref_c), isReactive(reactive_c),isReactive(readonly_c))
    console.log(isReadonly(ref_c), isReadonly(reactive_c),isReadonly(readonly_c))
    console.log(isProxy(ref_c), isProxy(reactive_c),isProxy(readonly_c))
  }
})
</script>

<style>
</style>