import Vue from 'vue'
// 使用vue-resource 请求数据
import VueRouter from 'vue-router'

Vue.config.productionTip = false
    // 使用axios请求数据

// 使用
Vue.use(VueRouter)
    // 1.创建组件
import Home from '../components/Home.vue'
import New from '../components/News.vue'
import Content from '../components/Content.vue'
import ProdectContent from '../components/ProdectContent.vue'

import Login from '../components/Login.vue'
import User from '../components/User.vue'
import userAdd from '../components/user/userAdd.vue'
import userList from '../components/user/userList.vue'

// 2.配置路由
const routes = [
        { path: '/home', component: Home },
        { path: '/new', component: New },
        { path: '/content/:id', component: Content },
        { path: '/ProdectContent', component: ProdectContent },
        { path: '/login', component: Login },
        { path: '/User', component: User,
          children:[
              {path: 'userAdd', component: userAdd},
              {path: 'userList', component: userList}
            ]
       },

        // { path: '*', component: Notfont },
    ]
    // 3.实例化路由
const router = new VueRouter({
        routes // (缩写) 相当于 routes: routes
    })
    // Vue.use(axios)
    //4. 挂载路由
export default router;