<template>
  <div id="app">
      <router-view></router-view>
      <!-- 跳转 -->
      <router-link to="/home">跳转到home</router-link>
      <br>
      <router-link to="/new">跳转到news</router-link>
      <img alt="Vue logo" src="./assets/logo.png">
    <h1>父子组件的传参</h1>
    
    <parent></parent>

    <hr>

   <HelloWorld msg="练习todo"/> 
   <hr>
   <!-- 3.模板中使用 -->
   <!-- <Home></Home>
   <hr>
   <New></New> -->
   <hr>
   <todoList></todoList>  
   <hr>
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<h2>你好 vue</h2> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <ul type="none">
        <li v-for="(itme,index) in list" :key="index" :class="{'red':index==0}">
          {{index}}------------{{itme.title}}
        </li>
    </ul>
    <!-- 
      双向数据绑定 ：  mvvm vue就是一个mvvm的框架
      m model
      v view
      mvm model改变会影响视图view view视图改变反过来会影响model
    -->
    <h2>正在输入：{{msg}}</h2>
    <input type="text" placeholder="请输入" v-model="msg"/>
    <button @click="getMsg()">获取表单中的数据get：</button>
    <input type="text" ref="userinfo">
    <div ref="box" >获取的之</div>
    <button @click="setMsg()">设置表单中的数据set：</button>
    <div class="box" :style="{'width':boxWidth+'px'}"></div>
  </div>
</template>

<script>
    import HelloWorld from './components/HelloWorld.vue'
    import todoList from './components/todolist.vue'
    // 1. 引入组件

    // import Home from './components/Home.vue'
    // import New from './components/News.vue'
    import parent from './components/Parent.vue'

    export default {
        name: 'app',
        data() {
            return {
                list: [{
                    id: 1,
                    title: "你好"
                }, {
                    id: 2,
                    title: "你好"
                }, {
                    id: 3,
                    title: "你好"
                }, {
                    id: 4,
                    title: "你好"
                }],
                boxWidth: 300,
                msg: ""
            }
        },
        methods: {
            getMsg() {
                console.log(this.msg)


            },
            setMsg() {
                console.log();
                this.msg = "改变表单中的值";
                // 获取ref定义的dom节点
                console.log(this.$refs.userinfo)
                this.$refs.box.style.background = "red";
                console.log(this.$refs.box);
            }
        },
        components: {
            HelloWorld,
            todoList,
            // Home,  //2.挂载，
            // New,
            parent
        }
    }
</script>

<style>
    /* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>