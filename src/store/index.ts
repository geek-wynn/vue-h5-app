import type { App } from 'vue';
// 注 导入创建状态管理方法
import { createPinia } from 'pinia';
// 注 定义状态管理方法
const store = createPinia();
// 注 导出挂载状态管理
export function setupStore(app: App<Element>) {
    app.use(store);
}

export { store };
