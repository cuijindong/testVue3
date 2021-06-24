<template>
  <div>
    <h1>{{msg}}</h1>
    <select>
      <option value="1">Yesterday</option>
      <option value="2">Today</option>
      <option value="3">Tomorrow</option>
    </select>
    <slot></slot>
  </div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  name:"test",
  props: {
    msg: String
  },
  test: 33,
  setup(props, context) {
    console.log(props.msg)
    console.log(context.attrs)
    console.log(context.slots)
  }
})
</script>

<style>
</style>