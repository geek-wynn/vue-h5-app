import { App } from 'vue';
import {
  createRouter,
  createWebHashHistory,
  Router,
  PathParserOptions,
} from 'vue-router';
import { createRouterGuards } from './beforeEach';
import Index from '@/layout/Index/Index.vue'
import Mall from '@/layout/Mall/Index.vue'

/**
 * 权限：用户 护士 医生
 */
const routes: any = [
  {
    name: '默认',
    path: '/',
    meta: { icon: 'msg', roles: ['edit', 'admin'] },
    redirect: '/home',
    component: Index,
    children: [
      {
        name: '首页',
        path: 'home',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/index/index.vue'),
      },
      {
        name: '快验',
        path: 'healthExamination',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/healthExamination/index.vue'),
      },
      {
        name: '快诊',
        path: 'diagnose',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/diagnose/index.vue'),
      },
      {
        name: '圈子',
        path: 'circle',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/circle/index.vue'),
        children: [],
      },
      {
        name: '我的',
        path: 'my',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/my/index.vue'),
      },
    ]
  },
  {
    name: '商城',
    path: '/mall',
    meta: { icon: 'msg', roles: 10 },
    redirect: '/mall/index',
    component: Mall,
    children: [
      {
        name: '商城首页',
        path: 'index',
        meta: { icon: 'msg', roles: 10 },
        component: () => import('@/view/mall/index.vue'),
      },
    ]
  },
  {
    name: '活动',
    path: '/activity',
    meta: { icon: 'msg', roles: 10 },
    component: () => import('@/view/activity/index.vue'),
  },
  {
    name: '对外',
    path: '/external',
    meta: { icon: 'msg', roles: 10 },
    component: () => import('@/view/external/index.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});

export function setupRouter(app: App) {
  // 注 注册路由
  app.use(router);
  // 注 创建路由守卫
  createRouterGuards(router);
}

export default router;
