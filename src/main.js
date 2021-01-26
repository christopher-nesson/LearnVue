import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// 全局组件配置
// 1、导入组件
import HiWorld from '@/components/HiWorld.vue'
// 2、注册全局组件
Vue.component('HiWorld',HiWorld)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
