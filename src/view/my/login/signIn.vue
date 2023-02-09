<template>
  <div class="main">
    <div class="title">欢迎注册</div>
    <div class="desc">小鸟快验医护管理系统</div>
    <div class="form">
      <van-form @submit="onSubmit">
        <van-cell-group inset>
          <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
          />
          <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const password = ref('');
const username = ref('');
const onSubmit = () => {
  console.log('提交')
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100vh;
  background: url("@/assets/login_bg.png") no-repeat left top;
  background-size: contain;
  .title {
    position: absolute;
    left: 25px; top: 71px;
    font-size: 26px;
    color: #282828;
    font-weight: bold;
  }
  .desc {
    position: absolute;
    left: 25px; top: 110px;
    font-size: 18px;
    color: #545454;
  }
  .form {
    width: 100%;
    height: calc(100vh - 173px);
    box-sizing: border-box;
    padding: 20px 15px;
    position: fixed;
    bottom: 0; left: 0;
    background: #FFFFFF;
    border-radius: 26px 26px 0px 0px;
  }
}
</style>