<template>
  <h2>Child</h2>
  <div>{{age}}</div>
  <div>{{length}}</div>
</template>

<script lang="ts">
import { computed, defineComponent, Ref, toRef } from 'vue'
export default defineComponent({
  props: {
    age: {
      type: Number,
    }
  },
  setup(props) {
    const length = useSomeFeature(toRef(props, 'age'))
    function useSomeFeature(age: Ref) {
      return computed(() => {
        return age.value.toString().length
      })
    }
    return {
      length
    }
  }
})
</script>

<style>
</style>