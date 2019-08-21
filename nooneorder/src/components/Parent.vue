<template>
    <div class="parent">
        <h1>我是父组件</h1>
        <h3>一种 ：父组件给子组件传值</h3><br>
            <p style="border:1px solid red"> 
                1.父组件调用子组件的时候，绑定动态属性<br>
                     <!-- 自定义一个属性 -->
                <childer :title="title" :msg="msg" :runc="runc"  :home="this"></childer>
                2.在子组件里面通过  props接收父组件传过来的数据<br>
                <!-- props:['title','msg','runc','home'], -->
                3.直接在子组件里面使用<br>
            </p>
        <h3>二种：父组件主动获取子组件的数据和方法</h3>
            <p style="border:1px solid green">
                1.在子组件中定义一个ref<br>
            <childer ref="childre1"></childer><br>
            <button @click="getChild">获取子组件中的方法run</button><br>
                2.在父组件里面通过  this.$refs.childre1.要传的名字<br>
            </p>
        <h3>三种：子组件主动获取父组件的数据和方法</h3>
            <p  style="border:1px solid blue">
                <!-- 1.this.$prent.数据 -->
            </p>
        
    </div>
</template>
<script>
import childer from './Childer.vue'
export default {
    data() {
        return {
            title:"123456",
            msg:"父组件"
        }
    },
    methods: {
        runc(){
            alert("父组件传递的一个方法")
        },
        run(data){
            alert("我是父组件的run方法"+data)
        },
        getChild(){
            alert(this.$refs.childre1.msgc);
            alert(this.$refs.childre1.run())

        }
    },
    components:{
        childer

    }
}
</script>
<style>
.parent{
    border: 1px solid #232323
}
</style>