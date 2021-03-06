import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "app",
    redirect:'/login',
    component: () => import("@/App"),
    // 子路由对应的父组件中必须有 <router-view /> 才能显示子组件
    children:[
      {
        path: "sort",
        name: "sort",
        component: () => import("@/views/sort"),
      },
      {
        path: "compress-img",
        name: "compress-img",
        component: () => import("@/views/compress-img"),
      },
      {
        path: "login",
        name: "login",
        component: () => import("@/views/login"),
      },
      {
        path: "waterfall",
        name: "waterfall",
        component: () => import("@/views/waterfall"),
      },
      {
        path: "canvas",
        name: "canvas",
        component: () => import("@/views/canvas"),
      },
      
    ]
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
