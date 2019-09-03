<template>
    <div id="user">
        <div class="user">
            <div class="user_left">
                <ul>
                    <li>
                        <router-link to="/User/userAdd">添加用户</router-link>
                        <br />
                        <router-link to="/User/userList">用户列表</router-link>
                        <br />
                    </li>
                </ul>
            </div>
            <div class="user_right">
                <router-view></router-view>
            </div>
        </div>
        <h1 class="page-title">Action Sheet</h1>
            <div class="page-actionsheet-wrapper">
                  <button class="mint-button mint-button--default mint-button--large" @click="actionSheet">
                        <label class="mint-button-text">点击上拉 action sheet</label>
                  </button>   
        </div>
        <mt-actionsheet :actions="data" v-model="sheetVisible"></mt-actionsheet>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                msg: "我是一个user组件",
                data: [{
                    name: '拍照',
                    method: this.getCamera // 调用methods中的函数
                }, {
                    name: '从相册中选择',
                    method: this.getLibrary // 调用methods中的函数
                }],
                // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
                sheetVisible: false,

            };
        },
        methods: {
            actionSheet: function () {
                // 打开action sheet
                this.sheetVisible = true;
            },
            getCamera: function () {
                console.log("打开照相机")
            },
            getLibrary: function () {
                console.log("打开相册")
            }
        }

    };
</script>
<style>
    .user {
        display: flex;
    }

    .user_left {
        width: 30%;
        border: 1px solid red;
    }

    .user_right {
        width: 70%;
        border: 1px solid green;
    }
</style>