import Vue from 'vue'
import App from './App.vue'
// 使用vue-resource 请求数据
import VueResource from 'vue-resource'

Vue.config.productionTip = false
// 使用axios请求数据

// 使用
Vue.use(VueResource)
// Vue.use(axios)
new Vue({
  render: h => h(App),
}).$mount('#app')
