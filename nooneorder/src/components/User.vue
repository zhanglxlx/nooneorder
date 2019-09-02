<template>
    <div id="user">
        <div class="user">
            <div class="left">
                    <router-link to="/User/userAdd">增加用户</router-link>
                    <br>
                    <router-link to="/User/userList">用户列表</router-link>
            </div>
            <div class="right">
                <div>
                   <router-view></router-view>
                </div>
            </div>
        </div>
 
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:"我是一个组件"
        }
    }
}
</script>
<style>
    .user{
        display: flex;
    }
    .left{
        width:200px;

    }
</style>