import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/Login/LoginPage.vue";

// 定义路由
const routes = [
  {
    path: "/",
    name: "/homepage",
    component: HomePage,
  },
  {
    path: "/login",
    component: LoginPage,
  },
];

// 创建路由实例
const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
