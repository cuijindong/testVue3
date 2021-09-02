<template>
  <input type="text" v-model="keyWord">
  <hr>
  <span>{{keyWord}}</span>
</template>

<script lang="ts">
import { customRef, defineComponent, Ref, ref } from 'vue'
export default defineComponent({
  setup() {
    const keyWord = useDebouncedRef<string>('test')
    function useDebouncedRef<T>(value: T, delay = 500): Ref<T> {
      let timer:number
      return customRef((track, trigger) => {
        return {
          get() {
            track()
            return value
          },
          set(newV) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newV
              trigger()
            }, delay);
          }
        }
      })
    }
    return {
      keyWord,
    }
  }
})
</script>

<style>
</style>