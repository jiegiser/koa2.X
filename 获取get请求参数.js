
const Koa=require('koa');
const app=new Koa();
app.use(async(ctx)=>{
    // 从request中接收get请求
    // 得到请求的地址
    // let url=ctx.url;
    // // request对象一般是请求的对象，
    // // 前端发送的命令都在Request对象里面
    // let request=ctx.request;
    // let req_request=request.query;//返回的是格式化好的参数对象
    // let reqString_request=request.querystring;//返回的是请求的字符串

    // 从上下文中直接获取get请求
    let ctx_query=ctx.query;
    let ctx_querystring=ctx.querystring;
    
    ctx.body={
        ctx_query,
        ctx_querystring
    }

})
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});