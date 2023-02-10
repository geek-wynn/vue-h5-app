
<template>
  <div class="xn-body">
    <van-sticky>
      <div class="header">{{ test }}</div>
    </van-sticky>
    <van-button @click="clickHandle">++</van-button>
    <van-button @click="mallHandle">商城</van-button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import Router, { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user'
import { setCats } from '@/api/common';
const test = ref(1)
const user = useUserStore();
const useRouters = useRouter();
if (user.getUserName) {
  test.value = Number(user.getUserName)
}
const clickHandle = () => {
  test.value ++;
  // setCats({ id: test.value }).then((res:any) => {
  //   console.log(res)
  // })
  user.setUserName(String(test.value));
}
const mallHandle = () => {
  useRouters.push('/mall');
}
</script>

<style lang="scss" scoped>
.header {

}
</style>