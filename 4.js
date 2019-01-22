const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();
const router=new Router();
router.get('/',(ctx,next)=>{
    //ctx.query就是接受你在地址上输入的参数
    ctx.body=ctx.query;
})

// 装载路由
app.use(router.routes()).use(router.allowedMethods())

app.listen(3000,()=>{
    console.log('服务启动');
})