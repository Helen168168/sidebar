import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router'
import elementui from 'element-ui'
Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(elementui)
new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
