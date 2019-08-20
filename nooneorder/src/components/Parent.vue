<template>
    <div class="parent">
        <h1>我是父组件</h1>
        <!-- 自定义一个属性 -->
        <children :title="title" :msg="msg" :run="run"></children>
    </div>
</template>
<script>
import children from './Childer.vue'
export default {
    data() {
        return {
            title:"123456",
            msg:"123"
        }
    },
    methods: {
        run(){
            aleret("我是父组件的run方法")
        }
    },
    components:{
        children

    }
}
</script>
<style>
.parent{
    border: 1px solid #232323
}
</style>