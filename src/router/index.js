import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import LoginPage from "../views/Login/LoginPage.vue";
import BaseA from "../views/Nav/BaseA.vue";
import BaseB from "../views/Nav/BaseB.vue";
import BaseC from "../views/Nav/BaseC.vue";
import NavPage from "../views/Nav/NavPage.vue";
import FoundHouse from "../views/setup/FoundHouse.vue";
import WorkBench from "../views/right/WorkBench.vue";

// 定义路由
const routes = [
  {
    path: "/",
    redirect: "/login",
  },
  {
    path: "/nav",
    component: NavPage,
    children: [
      {
        path: "",
        component: HomePage,
      },
      {
        path: "/home",
        component: HomePage,
        children: [
          {
            path: "",
            component: BaseB,
          },
          {
            path: "/basea",
            component: BaseA,
          },
          {
            path: "/baseb",
            component: BaseB,
          },
          {
            path: "/basec",
            component: BaseC,
          },
        ],
      },
      {
        path: "/work",
        component: WorkBench,
      },
      {
        path: "/setup",
        component: FoundHouse,
      },
    ],
  },
  // {
  //   path: "/home",
  //   component: HomePage,
  //   children: [
  //     {
  //       path: "/basea",
  //       component: BaseA,
  //     },
  //     {
  //       path: "/baseb",
  //       component: BaseB,
  //     },
  //     {
  //       path: "/basec",
  //       component: BaseC,
  //     },
  //   ],
  // },
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
