import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

/*state 在vuex中国用于存储数据 */
var state={
    count:1,
    list:[]
}
/*mutation里面存放的书方法，方法主要用于改变data里面的数据 */
var mutations={
    incCount(){
        ++state.count
    },
    addList(state,data){
        state.list=data
    }
}
// 优点类似计算属性，改变state里面的count数据的时候回触发，getters里面的方法，获取新的值
var getters={
    computedCount: state => {
        return state.count*2
      }
}
var actions={
    incCount(){
        ++state.count
    }
}
// const store=new Vuex.Store({
//     state:{
//         count:1
//     },
//     mutations:{
//         incCount(state){
//             ++state.count
//         }
//     }
// })

// 简写：实例化store 
const store=new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})

// 导出
export default store;