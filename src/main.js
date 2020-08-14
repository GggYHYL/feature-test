import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;

// 守卫
router.beforeEach((to, from, next) => {
  if (window.sessionStorage.getItem('userToken')) {
    next()
  } else {
    if (to.name === 'sort') {
      next({
        path: '/compress-img',
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
