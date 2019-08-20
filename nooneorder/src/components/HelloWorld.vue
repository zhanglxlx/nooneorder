<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="text" v-model="todo">
    <button @click="getAdd()">添加</button>
    <br>
    <br>
    <br>
    <br>
    <ul>
      <li v-for="(item,key) in list">{{item}} 
        <button @click="deleteList(key)">删除</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      todo:'',
      list:[],
    }
  },
  methods: {
    getAdd(){
      this.list.push(this.todo)
      this.todo="";
    },
    deleteList(index){
      this.list.splice(index,1)
      console.log(this.list);
    }
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
</style>
