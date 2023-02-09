import { Router } from 'vue-router';
// 注 向外抛出createRouterGuards方法
export function createRouterGuards(router: Router) {
  // 前置路由
  router.beforeEach(async (to, from, next) => {
    const name: any = to.name; // 路由名称
    const roles: any = to.meta.roles; // 访问权限

    document.title = `小鸟快验 - ${name}`;

    // 注 下一步
    next();
  });

  // 后置路由
  router.afterEach(async (to, from, next) => {
  });

  // 路由错误
  router.onError((error) => {
    console.log('路由错误' + error);
  });
}
