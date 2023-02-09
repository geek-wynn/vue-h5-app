/* A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received 浏览器插件问题 */
import { createApp } from 'vue';
import '@/style/index.scss';
import '@/style/variables.css';
import App from './App.vue';
import router, { setupRouter } from './router';
import { setupStore } from './store'
async function mainApp() {
  // 创建APP
  const app = createApp(App);
  // 挂在状态管理
  await setupStore(app);
  // 挂载路由
  await setupRouter(app);
  // 路由准备就绪后挂载APP实例
  await router.isReady();
  app.mount('#app');
}

void mainApp();
