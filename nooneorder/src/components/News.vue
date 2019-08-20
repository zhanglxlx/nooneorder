<template>
    <div>
        <!-- 生命周期函数 -->
        <!-- 组件挂载以及组件更新、组件销毁的时候，触发一系列的方法，这些方法就叫做生命周期函数 -->
        <p>{{msg}}</p>
        <button @click="update()">执行方法改变msg</button>
        <p v-if="flag">挂载p标签</p>
    </div>
</template>
<script>
export default {
    data() {
      return {
            msg:"我是一个生命周期组件",
            flag:true
        }
    },
    methods: {
        update(){
            this.msg="改变后的值"
        }
    },
    beforeCreate() {
        console.log("实例创建前")
    },
    created(){
        console.log("实例已经创建完成")
    },
    beforeMount() {
        console.log("模板编译之前")
    },
    mounted() {
        console.log("模板编辑完成");
    },
    beforeUpdate() {
        this.msg="更新啦"
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