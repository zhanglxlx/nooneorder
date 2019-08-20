<template>
    <div class="childer">
        <h1>我是子组件</h1>
        <p>子组件接受的值---:{{title}}第二个参数： {{msg}}</p>
        <button @click="run()">
            调用父组件传过来的方法 run
        </button>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                
            }
        },
        props:['title','msg','run'], //接受子组件的属性名称
        methods: {
            
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