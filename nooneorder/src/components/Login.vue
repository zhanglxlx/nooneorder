<template>
    <div class="login">
        <p>用户名称：<input type="text" name="uname"  v-model="uname"></p>
        <p>用户名称：<input type="password" name="upwd" v-model="upwd"></p>
        <p>
            <button class="succ" @click="login">登录</button>

            <button class="reg">注册</button>
        </p>
    </div>
</template>
<script>

export default {
    data() {
        return {
            uname:"",
            upwd:""
        }
    },
    methods: {
        login(){
           this.$axios({
                method:"post",
                url:"http://127.0.0.1:3000/users/signin",
                data:{"uname":this.uname,"upwd":this.upw}
           }).then((result)=>{
               console.log(result.data);
               if(result.data==1){
                alert("登录成功");
                this.$router.push('/home')
               }else{
                   alert(result.data.msg);
               }
                // console.log(result.data);
           }).catch((err)=>{
                console.log(err)
           })
        }
    },
}
</script>
<style lang="scss">
    .login{
        padding: 2rem;
    }
    .login p{
        padding: 0.5rem;
    }
    .succ,.reg{
            background: green;
            padding: 0.5rem;
            width: 30%;
            border: 0;
            color: #fff;
            margin-left:3.5rem; 
        }
    .reg{
        background: red;
    }


</style>