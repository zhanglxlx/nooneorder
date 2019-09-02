<template>
    <div id="adduser">
        <h1>用户列表</h1>
        <ul v-infinite-scroll="loadMore" infinite-scroll-disabled="loading" infinite-scroll-distance="10">
            <li v-for="item in list">{{ item.title }}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: "我是一个组件",
                list: [],
                page:1,
                loading:false
            }
        },
        mounted() {
            this.requestData()
        },
        methods: {
            loadMore() {
                this.requestData()
            },
            requestData() {
                this.loading = true;
                // this.$axios.get("http://127.0.0.1:3000/index").then(function (res) {
                //     console.log(res);
                //     this.list = res.data;
                //     this.loading=false;
                // }).catch(function(err) {
                //     throw err;
                // })
                this.$http.get("http://127.0.0.1:3000/index").then((response)=>{
                    this.list=response.data;
                    ++this.page;
                    console.log(response)
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

    }
</script>
<style>
    .user {
        display: flex;
    }

    .left {
        width: 200px;

    }
</style>