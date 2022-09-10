//程序入口
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import api from './api/index'
import 'default-passive-events'
//路由拦截
import "./router/permit"
//配置成员变量文件夹
import store from "./store/state";
 
Vue.prototype.$api=api
Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
