<template>
  <fieldset>
    <legend>user</legend>
    姓：<input type="text" v-model="user.name1" /><br />
    名：<input type="text" v-model="user.name2" />
  </fieldset>
  <hr />
  <fieldset>
    <legend>watch</legend>
    姓：<input type="text" v-model="name1" /><br />
    姓名：<input type="text" v-model="fullName" />
  </fieldset>
  <hr>
  <fieldset>
    <legend>watchEffect</legend>
    姓名：<input type="text" v-model="fullName1" />
  </fieldset>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, watch, watchEffect } from "vue";
export default defineComponent({
  setup() {
    const user = reactive({
      name1: "xing",
      name2: "ming",
    });
    const fullName = ref("");
    watch(
      user,
      ({ name1, name2 }) => {
        fullName.value = name1 + name2;
      },
      { immediate: true }
    );
    const name1 = ref("");
    watch(
      () => user.name1,
      (val) => {
        name1.value = val;
      },
      { immediate: true }
    );
    const fullName1 = ref('')
    watchEffect(() => {
      fullName1.value = user.name1 + user.name2
    })
    return {
      user,
      fullName,
      name1,
      fullName1
    };
  },
});
</script>

<style>
</style>