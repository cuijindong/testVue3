<template>
  <fieldset>
    <legend>user</legend>
    姓：<input type="text" v-model="user.firstName">
    名：<input type="text" v-model="user.lastName">
  </fieldset>
  <hr>
  <fieldset>
    <legend>computed</legend>
    姓：<input type="text" v-model="computedUser.firstName">
    名：<input type="text" v-model="computedUser.lastName">
  </fieldset>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue'
export default defineComponent({
  setup() {
    interface Iuser{
      firstName: string,
      lastName: string
    }
    let user: Iuser = reactive({
      firstName: 'xing',
      lastName: 'ming'
    })
    const computedUser = computed({
      get() {
        return user
      },
      set(val: Iuser) {
        user = val
      }
    })
    return {
      user,
      computedUser
    }
  }
})
</script>

<style>
</style>