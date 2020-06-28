import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    component: () => import("@/App"),
    // 子路由对应的父组件中必须有 <router-view /> 才能显示子组件
    children:[
      {
        path: "sort",
        name: "sort",
        component: () => import("@/views/sort"),
      }
    ]
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
