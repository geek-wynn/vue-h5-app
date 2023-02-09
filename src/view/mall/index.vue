<template>
  商城首页{{ test }}
  <van-button type="primary" @click="home">系统首页</van-button>
  <van-button type="primary" @click="sub">--</van-button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Router, { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user'
const user = useUserStore();
const test = ref<number>(Number(user.getUserName));
const useRouters = useRouter();
const home = () => {
  useRouters.push('/home')
}
const sub = () => {
  test.value --;
  user.setUserName(String(test.value));
}
</script>

<style scoped>

</style>