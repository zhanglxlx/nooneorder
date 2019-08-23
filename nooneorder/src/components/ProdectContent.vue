<template>
    <div>
        <h1>我是商品组件</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                

            }
        },
        mounted() {
            // get获取参数
            console.log(this.$route.query);/*获取动态的值*/
        }
    }
</script>
<style>

</style>