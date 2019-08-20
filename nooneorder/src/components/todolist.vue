<template>
    <div>
        <input type="text"  placeholder="请输入..."   v-model="todo" @keydown="downAdd($event)">
        <button @click="getAdd()">添加</button>
        <hr>
        <h2> 进行中......</h2>
         <ol type="1 ">
            <li v-for="(item,index) in list" :key="index" v-if="!item.checked">
                <input type="checkbox" v-model="item.checked"  @change="saveList()"/>
                {{item.title}}
                <button @click="deteleList(index)">删除</button>
            </li>
        </ol>
        <hr>
        <h2>已完成</h2>
        <ol>
            <li v-for="(item,index) in list"  class="succ" :key="index "  v-if="item.checked">
                <input type="checkbox" v-model="item.checked" @change="saveList()"/>
                {{item.title}}
                <button @click="deteleList(index)">删除</button>
            </li>
        </ol>
    </div>
</template>
<script>
// 引入封装好的storage
import storage from '../model/storage.js'
//  console.log(storage);
export default {
    data(){
        return{
            // checked:false,
            list:[],
            todo:"",
        }
    },
    computed: {
        // list:[
        //     {title:'',checked:false}
        // ]
    },
    methods: {
        add(){ //封装的事项
            if(this.todo){
                this.list.push({
                    title:this.todo,
                    checked:false
                });
                // 讲文本框中的内容为空
                this.todo="";
            }else{
                alert("请输入要添加的事项")
            }
        },
        downAdd(e){//按下回车键添加
            // 获取文本框中的值
            // 讲值push到数组中
            if(e.keyCode==13){
                this.add();
            }
            storage.set('list',this.list)
        },
        getAdd(){//点击添加按钮
            // 获取文本框中的值
            // 讲值push到数组中
            this.add();
            storage.set('list',this.list)
        },
        deteleList(index){
            this.list.splice(index,1);
            storage.set('list',this.list);
        },
        saveList(){
            // 状态改变是，存储
            storage.set('list',this.list)
        }
    },
    mounted() {//生命周期函数，  vue页面刷新就会触发的方法
        var list=storage.get('list')
        if(list){ /** 注意判断*/
            this.list=list;
        }
    },
}
</script>
<style>
    .succ{
        background:green
    }
</style>