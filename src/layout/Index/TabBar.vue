<!-- 系统tabBar -->
<template>
  <div class="tab-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search">标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
const currentRoute = useRoute();
const router = useRouter();
// console.log(currentRoute.matched, router)
const active = ref<number>(0)
</script>

<style scoped lang="scss">
</style>