import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// import ElementUI from 'element-ui'
import Vant from 'vant'
import Canvas from 'canvas'
// import 'element-ui/lib/theme-chalk/index.css'
import 'vant/lib/index.css'

Vue.config.productionTip = false;

// Vue.use(ElementUI)
Vue.use(Canvas)
Vue.use(Vant)

// 守卫
router.beforeEach((to, from, next) => {
  if (localStorage.getItem('token')) {
    next()
  } else {
    if (to.name !== 'login') {
      next({
        path: '/login',
        query: {
          id: 111111
        }
      })
    } else {
      next()
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
