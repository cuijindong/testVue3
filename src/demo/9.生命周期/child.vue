<template>
  <h2>child</h2>
  <h5>msg: {{ msg }}</h5>
  <button @click="update">更新</button>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUnmounted, onUpdated, ref } from "vue";
export default defineComponent({
  beforeCreate() {
    console.log("2.x beforeCreate");
  },
  created() {
    console.log("2.x created");
  },
  beforeMount() {
    console.log("2.x beforeMount");
  },
  mounted() {
    console.log("2.x mounted");
  },
  beforeUpdate() {
    console.log("2.x beforeUpdate");
  },
  updated() {
    console.log("2.x updated");
  },
  beforeUnmount() {
    console.log("2.x beforeUnmount");
  },
  unmounted() {
    console.log("2.x unmounted");
  },
  setup() {

    onBeforeMount(() => {
      console.log("3.0 onBeforeMount")
    })
    onMounted(() => {
      console.log("3.0 onMounted")
    })
    onBeforeUpdate(() => {
      console.log("3.0 onBeforeUpdate")
    })
    onUpdated(() => {
      console.log("3.0 onUpdated")
    })
    onBeforeUnmount(() => {
      console.log("3.0 onBeforeUnmount")
    })
    onUnmounted(() => {
      console.log("3.0 onUnmounted")
    })

    const msg = ref("msg");
    const update = () => {
      msg.value += "===";
    };
    return {
      msg,
      update,
    };
  },
});
</script>

<style>
</style>