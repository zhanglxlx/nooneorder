<template>
    <div>
        <h1>news组件</h1>
        <!-- 生命周期函数 -->
        <!-- 组件挂载以及组件更新、组件销毁的时候，触发一系列的方法，这些方法就叫做生命周期函数 -->
        <p>{{msg}}</p>
        <button @click="update()">执行方法改变msg</button>
        <p v-if="flag">挂载p标签</p>
        <!-- 动态传参 -->
        <ul>
            <li v-for="(item,index) in list" :key="index">
               <router-link :to="'/content/'+index">
                {{index}}------{{item}}
              </router-link>   
            </li>
        </ul>
        <!-- get传参 -->
        <ul>
            <li v-for="(item,index) in listP" :key="index">
            <p>
                跳转到商品页
            </p>
               <router-link :to="'/ProdectContent?aid='+index">
                {{index}}------{{item}}
              </router-link>   
            </li>
        </ul>
        <!-- <button @click="requertData()">请求数据</button> -->
        <p>
            首页列表
        </p>
        <ul>
            <li v-for="(item,index) in listNews" :key="index">
               <router-link :to="'/content/'+item.pid">{{item.title}}</router-link>
            
            </li>
        </ul>
    </div>
</template>
<script>
    // import axios from 'axios'
    export default {
        data() {
            return {
                msg: "我是一个生命周期组件",
                flag: true,
                list: [111, 222, 333],
                listP:['商品1','商品2','商品3','商品4','商品5'],
                listNews:[]
            }
        },
        methods: {
            update() {
                this.msg = "改变后的值"
            },
            requertData(){
                var url="http://127.0.0.1:3000/index"
                this.$http.get(url).then((res)=>{
                    console.log(res.data)
                    this.listNews=res.data
                },(err)=>{
                    console.log(err)
                })
            }
        },
        beforeCreate() {
            console.log("实例创建前")
        },
        created() {
            console.log("实例已经创建完成")
        },
        beforeMount() {
            console.log("模板编译之前")
        },
        mounted() {
            this.requertData()
            console.log("模板编辑完成");
        },
        beforeUpdate() {
            this.msg = "更新啦"
        },
        updated() {
            console.log("更新完成")
        },
        beforeDestroy() {
            console.log("实例销毁之前")
        },
        destroyed() {
            console.log("实例销毁完成")
        },

    }
</script>
<style>

</style>