import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from 'element-ui'
import Canvas from 'canvas'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false;

Vue.use(ElementUI)
Vue.use(Canvas)

// 守卫
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    next()
  } else {
    document.title = to.name
    next()
    // if (to.name === 'sort') {
    //   next({
    //     path: '/login',
    //     query: {
    //       id: 111111
    //     }
    //   })
    // } else {
    //   next()
    // }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
