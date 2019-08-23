<template>
    <div class="main">
        <h2>{{title}}</h2>
        <img :src="md" alt="">
        <p>{{subtitle}}</p>
        <p v-html="details"></p>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                id:"",
                title:"",
                subtitle:"",
                details:"",
                md:'',
                sm:"",
                lg:"",    
            }
        },
        mounted(){
            /*获取动态的值*/
            console.log(this.$route.params.id)
            this.id=this.$route.params.id
            var url="http://127.0.0.1:3000/details?lid="+this.id
                this.$http.get(url).then((res)=>{
                    console.log(res.data)
                    var {lid,title,subtitle,details}=res.data.product;
                    this.title=title;
                    this.subtitle=subtitle;
                    this.details=details
                    var {sm,md,lg}=res.data.pics[0];
                    this.sm=sm;
                    this.md=md;
                    this.lg=lg;
                },(err)=>{
                    console.log(err)
                })
        }
    }
</script>
<style>
    .main{
        line-height: 2;
        width: 100%;
        height: auto;
        text-align: center;
        margin: auto;
        padding: 0.1rem;
    }
    img{
        width: 100%;
    }
</style>