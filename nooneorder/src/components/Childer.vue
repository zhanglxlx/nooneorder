<template>
    <div class="childer">
        <h1>我是子组件</h1>
        <!-- <p>子组件接受的值---:{{title}}第二个参数： {{msg}}</p> -->
        <p></p>
        <button @click="run('123')">
            调用父组件传过来的方法 run
        </button>
        <button @click="getParent()">获取子组件传递过来的title</button>
        <button @click="getparent()">子组件中自动获取父组件中的方法</button><br>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msgc:"我是一个子组件"
            }
        },
        props:['title','msg','runc','home'], //接受子组件的属性名称
        // props:{
        //     'title':String,
        //     'msg':String,
        //     'run':Function,
        //     'home':Object
        // },
        methods: {
            getParent(){
                alert(this.title);
                alert(this.runc);
                // alert(this.home.title);
            },
            getparent(){
                console.log(this.$parent.msg)
                console.log(this.$parent.runc())
            },
            run(){
                alert("我是子组件的方法")
            }
        },
        mounted() {
            
        },
    }
</script>
<style>
    .childer{
        border: 1px solid saddlebrown;
    }
</style>