import Vue from 'vue'
import App from './App.vue'
// 使用vue-resource 请求数据
import VueResource from 'vue-resource'
import axios from 'axios'
import router from './router/router.js'

Vue.prototype.$axios = axios;
import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
    // 使用axios请求数据

// 使用
Vue.use(VueResource)
    // 1.创建组件



// 引入公共的css 注意：创建此昂木的时候必须用scss

import './assets/css/basic.scss'
// 2.配置路由

new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
    // 5.在根组件中配置显示  <router-view></router-view>