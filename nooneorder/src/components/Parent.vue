<template>
    <div class="parent">
        <h1>我是父组件</h1>
        <h3>一种 ：父组件给子组件传值</h3><br>
            <p style="border:1px solid red"> 
                1.父组件调用子组件的时候，绑定动态属性<br>
                     <!-- 自定义一个属性 -->
                <children :title="title" :msg="msg" :run="run" :home="this"></children>
                2.在子组件里面通过  props接收父组件传过来的数据<br>
                <!-- props:['title','msg','run','home'], -->
                3.直接在子组件里面使用<br>
            </p>
        <h3>二种：父组件主动获取子组件的数据和方法</h3>
            <p style="border:1px solid green">
            <childre></childre>
            </p>
        <h3>三种：子组件主动获取父组件的数据和方法</h3>
            <p  style="border:1px solid blue">

            </p>
        
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
        run(data){
            alert("我是父组件的run方法"+data)
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