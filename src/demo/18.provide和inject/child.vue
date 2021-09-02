<template>
  <h3>child</h3>
  <hr>
  <son></son>
</template>

<script lang="ts">
import son from './son.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    son
  },
  setup() {

  }
})
</script>

<style>
</style>