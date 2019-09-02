import Vue from 'vue'
import App from './App.vue'
// 使用vue-resource 请求数据
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import axios from 'axios'

Vue.prototype.$axios = axios;
import qs from 'qs';
Vue.prototype.$qs = qs;
Vue.config.productionTip = false
    // 使用axios请求数据

// 使用
Vue.use(VueResource)
Vue.use(VueRouter)
    // 1.创建组件
import Home from './components/Home.vue'
import New from './components/News.vue'
import Content from './components/Content.vue'
import ProdectContent from './components/ProdectContent.vue'
<<<<<<< HEAD
import Login from './components/Login.vue'
import User from './components/User.vue'
import userAdd from './components/user/userAdd.vue'
import userList from './components/user/userList.vue'
=======
import Login from './components/Login.vue' 
import User from './components/User.vue' 
>>>>>>> b4939073563996c6019a686b3ff14dea29c73172
// 引入公共的css 注意：创建此昂木的时候必须用scss

import './assets/css/basic.scss'
// 2.配置路由
const routes = [
        { path: '/home', component: Home },
        { path: '/new', component: New },
        { path: '/content/:id', component: Content },
        { path: '/ProdectContent', component: ProdectContent },
        { path: '/login', component: Login },
<<<<<<< HEAD
        { path: '/User', component: User,
          children:[
              {path: '/userAdd', component: userAdd},
              {path: '/userList', component: userList}
            ]
       },
=======
        { path: '/user', component: User },
>>>>>>> b4939073563996c6019a686b3ff14dea29c73172

        // { path: '*', component: Notfont },
    ]
    // 3.实例化路由
const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
    })
    // Vue.use(axios)
    //4. 挂载路由
new Vue({
        router,
        render: h => h(App)
    }).$mount('#app')
    // 5.在根组件中配置显示  <router-view></router-view>