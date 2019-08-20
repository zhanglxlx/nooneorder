<template>
  <div id="app">
   <HelloWorld msg="练习todo"/> 
   <todoList></todoList>  
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!--<h2>你好 vue</h2> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import todoList from './components/todolist.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    todoList
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
