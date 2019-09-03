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
    <div class="page-actionsheet-wrapper">
      <button class="mint-button mint-button--default mint-button--large" @click="flage">
        <label class="mint-button-text">点击上拉 action sheet</label>
      </button>
    </div>
    <mt-actionsheet :actions="data" v-model="sheetVisible" :closeOnClickModal="closeOnClickModal"></mt-actionsheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是一个user组件",
      data: [
        {
          name: "拍照",
          method: this.getCamera // 调用methods中的函数
        },
        {
          name: "从相册中选择",
          method: this.getLibrary // 调用methods中的函数
        }
      ], // action sheet 默认不显示，为false。操作sheetVisible可以控制显示与隐藏
      sheetVisible: false,
      closeOnClickModal:true
    };
  },
  methods: {
    flage() {
      this.sheetVisible = true;
    },
    getCamera: function() {
      console.log("打开照相机");
    },
    getLibrary: function() {
      console.log("打开相册");
    }
  }
};
</script>
<style scoped>
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