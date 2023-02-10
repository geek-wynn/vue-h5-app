<!-- 系统tabBar -->
<template>
  <div class="tab-bar">
    <van-tabbar v-model="active">
      <van-tabbar-item v-for="(item, index) of tabBarList" :key="index" @click="tabHandle(item)">
        <span>{{ item.name }}</span>
        <template #icon="props">
          <img :src="props.active ? getAssetsFile(tabBarList[index].active) : getAssetsFile(tabBarList[index].inactive)" />
        </template>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { getAssetsFile } from "@/utils/pub-use";
const currentRoute = useRoute();
const router = useRouter();
const active = ref<number>(0);
console.log(getAssetsFile('/aaa'))
const tabBarList = [
  {
    name: '首页',
    url: '/home',
    active: '/common/tab_bar_icon_a_active.png',
    inactive: '/common/tab_bar_icon_a.png',
  },
  {
    name: '快验',
    url: '/healthExamination',
    active: '/common/tab_bar_icon_a_active.png',
    inactive: '/common/tab_bar_icon_a.png',
  },
  {
    name: '快诊',
    url: '/diagnose',
    active: '/common/tab_bar_icon_c_active.png',
    inactive: '/common/tab_bar_icon_c.png',
  },
  {
    name: '圈子',
    url: '/circle',
    active: '/common/tab_bar_icon_d_active.png',
    inactive: '/common/tab_bar_icon_d.png',
  },
  {
    name: '我的',
    url: '/my',
    active: '/common/tab_bar_icon_d_active.png',
    inactive: '/common/tab_bar_icon_d.png',
  },
];
const tabHandle = (item: any) => {
  router.push(item.url);
}
for (let i = 0; i < 5; i ++) {
  if (currentRoute.path === tabBarList[i].url) {
    active.value = i;
  }
}
</script>

<style scoped lang="scss">
</style>