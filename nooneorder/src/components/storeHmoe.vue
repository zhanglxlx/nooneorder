
<template>
    <div>
            <h1>vuex home组件</h1>
            <p>{{this.$store.state.count}}----------{{this.$store.getters.computedCount}}</p>    
            <ul>
                <li v-for="item in list">{{item.title}}</li>
            </ul>
            <button @click="incCount">修改vuex中的值</button>    
    </div>
</template>
<script>
    // 引入store
    import store from '../vuex/store.js'
    export default {
        data() {
            return {
                list:[]
            }
        },   
        store,
        methods: {
            incCount(){
                this.$store.commit("incCount");/*触发data中的数据*/
                // this.$store.dispatch('incCount');/*触发actions里面的方法*/
            },
            requestData(){
                this.$http.get("http://127.0.0.1:3000/index").then((response)=>{
                    this.list=response.data;
                    ++this.page;
                    this.$store.commit('addList',response.data)
                    if(response.data.length<20){
                        this.loading=true
                    }else{
                        this.loading=false
                    }
                },(err)=>{
                    console.log(err)
                })
            }
        },
        mounted() {
            var listData=this.$store.state.list;
            if(listData.length>0){
                this.list=listData
            }else{
                this.requestData();
            }
        },
    }
</script>
<style>

</style>