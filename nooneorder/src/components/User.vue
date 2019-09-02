<template>
    <div id="user">
        <div class="user">
            <div class="user_left">
            <ul>
                <li>
                    <router-link  to="/User/userAdd">添加用户</router-link>
                    <br>
                    <router-link  to="/User/userList">用户列表</router-link>
                </li>
            </ul>
        </div>
        <div class="user_right">
            <router-view></router-view>
        </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            msg:"我是一个user组件"
        }
    },
}
</script>
<style>
    .user{
        display: flex;
    }
    .user_left{
        width: 30%;
        border: 1px solid red;
    }
    .user_right{
        width: 70%;
        border:1px solid green;
    }

</style>