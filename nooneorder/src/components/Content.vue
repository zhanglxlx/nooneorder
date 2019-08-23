<template>
    <div>
        <h2>{{title}}</h2>
        <img :src="md" alt="">
        <p>{{subtitle}}</p>

    </div>
</template>
<script>
    export default {
        data() {
            return {
                id:"",
                title:"",
                subtitle:"",
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
                    var {lid,title,subtitle}=res.data.product;
                    this.title=title;
                    this.subtitle=subtitle;
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

</style>