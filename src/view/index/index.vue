
<template>
  <div class="xn-body">
    <van-button plain hairline type="primary">细边框按钮</van-button>
    <van-button plain hairline type="success">细边框按钮</van-button>
    <van-sticky>
      <div class="header">{{ test }}</div>
    </van-sticky>
    <van-button @click="clickHandle">++</van-button>
    <van-button @click="mallHandle">商城</van-button>
    <div class="age">
      你在{{ age }}出生
      <van-cell-group inset>
        <van-field v-model="value" readonly="readonly" label="文本" placeholder="请输入生日" @click="inputHandle" />
        <van-button @click="ageHandle">计算</van-button>
      </van-cell-group>
    </div>
    <van-popup
        v-model:show="showBottom"
        round
        position="bottom"
        :style="{ height: '30%' }"
    >
      <van-date-picker
          v-model="currentDate"
          title="选择日期"
          :min-date="minDate"
          :max-date="maxDate"
          @confirm="confirmHandle"
      />
    </van-popup>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { showLoadingToast } from 'vant';
import 'vant/es/toast/style';
import Router, { useRouter } from 'vue-router';
import { useUserStore } from '@/store/modules/user'
import { setCats } from '@/api/common';
const showBottom = ref<boolean>(false);
const test = ref(1)
const user = useUserStore();
const useRouters = useRouter();
const value = ref<string>('')
const age = ref<string>('')
const currentDate = ref(['1990', '01', '01']);
const minDate = new Date(1950, 0, 1)
const maxDate = new Date(2023, 3, 3)
import * as dayjs from 'dayjs'
import * as isLeapYear from 'dayjs/plugin/isLeapYear' // import plugin
import 'dayjs/locale/zh-cn' // import locale
import * as relativeTime from 'dayjs/plugin/relativeTime'
import * as updateLocale from 'dayjs/plugin/updateLocale'
dayjs.extend(relativeTime)
// dayjs.extend(updateLocale)
dayjs.locale('zh-cn') // use locale
// dayjs.updateLocale('zh-cn', {
//   relativeTime: {
//     future: "in %s",
//     past: "%s age",
//     s: 'a few seconds',
//     m: "a minute",
//     mm: "%d minutes",
//     h: "an hour",
//     hh: "%d hours",
//     d: "a day",
//     dd: "%d days",
//     M: "a month",
//     MM: "%d months",
//     y: "a year",
//     yy: "%d years"
//   }
// })
dayjs().format()
if (user.getUserName) {
  test.value = Number(user.getUserName)
}
const ageHandle = () => {
  showLoadingToast({
    message: '努力计算中...',
    forbidClick: true,
    duration: 3000
  });
  setTimeout(() => {
    age.value = dayjs().to(dayjs(value.value));
  }, 3000)
  // console.log(dayjs().to(dayjs(value.value)) )
}
const confirmHandle = () => {
  value.value = currentDate.value.join('-')
  console.log(value.value)
  showBottom.value = false
}
const inputHandle = () => {
  showBottom.value = true;
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