<template>
    <div id="user">
        <div class="user">
<<<<<<< HEAD
            <div class="left">
                    <router-link to="/userAdd">增加用户</router-link>
                    <br>
                    <router-link to="/userList">用户列表</router-link>
            </div>
            <div class="right">
                <div>
                    <!-- <userAdd></userAdd>
                    <userList></userList> -->
                </div>
            </div>
        </div>
 
    </div>
</template>
<script>
import userAdd from './user/userAdd.vue'
import userList from './user/userList.vue'
export default {
    data() {
        return {
            msg:"我是一个组件"
        }
    },
    components:{
        userAdd,
        userList
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

<style>

</style>