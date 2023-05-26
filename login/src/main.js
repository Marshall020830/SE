import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App.vue'
import VueRouter from 'vue-router'
//引入路由器
import router from './router/index'
import store from './store'
import axios from 'axios'
import qs from 'qs'
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.axios = axios
Vue.prototype.qs = qs
Vue.use(VueRouter)
Vue.prototype.baseURL = 'https://jsonplaceholder.typicode.com'
// 
new Vue({
  // 完成了将APP组件放入容器中
  render: h => h(App),
  router:router,
  store:store
}).$mount('#app')
