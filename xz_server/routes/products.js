const express=require("express");
const router=express.Router();
const pool=require("../pool");

//http://localhost:3000/products?kwords=i5&pno=0
router.get("/",(req,res)=>{
  var kwords=decodeURIComponent(req.query.kwords);
  var output={
    pno:0,//起时也
    pageSize:9,//每页数的条数
    count:0,//总条数
    pageCount:0, //总数量=ceil(count/pageSize)
    products:[]  //所有商品中starti,endi结束
  }
  if(req.query.pno!==undefined){
    output.pno=parseInt(req.query.pno)
  }
  //"macbook i5 128g"
  // 按空格切割字符串
  kwords=kwords.split(" ");
  //[macbook,i5,128g]
  // 通过遍历数组
  kwords.forEach((val,i,arr)=>{
    arr[i]=`%${val}%`
  })
  //[%macbook%,%i5%,%128g%]
  // 申明一个空数组
  var arr=[];
  for(var kw of kwords){
    arr.push(` title like ? `);
  }
  /*[
    title like ?,
    title like ?,
    title like ?
  ]*/
  // 拼接
  var where=" where "+arr.join(" and ");
  var sql="select *,(select md from xz_laptop_pic where laptop_id=lid limit 1) as md from xz_laptop "+where;
  pool.query(sql,kwords,(err,result)=>{
    if(err) {console.log(err)};
    var count=result.length;
              // 上取整
    var pageCount=Math.ceil(count/output.pageSize);
    output.count=count;
    output.pageCount=pageCount;
    var starti=output.pno*output.pageSize;
    console.log(result)
                                // 开始位置   结束位置 slice含头不含尾
    output.products=result.slice(starti,starti+output.pageSize);
                                 // 0  0   9
                                 // 1  9  18
                                  //2  18   27
    res.send(output)
  })
})

module.exports=router;