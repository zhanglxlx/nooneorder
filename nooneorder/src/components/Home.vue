<template>
    <!-- 所有的内容要被跟节点包含起来 -->
    <div>
        <h1>home组件</h1>
        <!-- 组件练习 -->
        <h1>数据请求</h1>
        <p>{{msg}}</p>
        <button @click="run()">run</button>
        <hr>
        <h2>
            请求数据
        </h2>
        <button @click="getData()">   请求数据</button>
        <ol>
            <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ol>
        <ul>
            <li v-for="(item,index) in list" :key="index">
                {{item.details}}
            </li>
        </ul>
   </div>
</template>
<script>
    import axios from 'axios'
export default {
    data(){
        return{
            msg:"我是home页面",
            list:[]
        }
    },
    methods: {
        run(){
            alert("运行了")
        },
        getData(){
            // 使用vue-resource请求数据
            var url="http://127.0.0.1:3000/index";
            this.$http.get(url).then((result)=>{
                console.log(result.data);
                this.list=result.data;
            }).catch((err)=>{
               console.log(err)

            })
            // 使用axios请求数据
            axios.get(url).then((result)=>{
                 console.log(result.data);
             }).catch((err)=>{
                console.log(err)
             })
        }
    },
    mounted() {
        this.getData();
    },
}
</script>
<style>

</style>