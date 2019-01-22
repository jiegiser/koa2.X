// 安装插件koa-router
// npm install --save koa-router      --save就是使用保存本地-开发环境。
const Koa=require('koa');
const Router=require('koa-router');
const app=new Koa();


//父级路由
let router=new Router();


// 做两个子级路由
let home=new Router();
home.get('/jiegiser',async(ctx)=>{
    ctx.body="home Jiegiser page"
}).get('/todo',async(ctx)=>{
    ctx.body="home todo page"
});

let page=new Router();
page.get('/jiegiser',async(ctx)=>{
    ctx.body="page Jiegiser page"
}).get('/todo',async(ctx)=>{
    ctx.body="page todo page"
});


// 装在子路由到父路由
// 装载home子路由--第一个参数可以任意，是启用home路由的配置
router.use('/home',home.routes(),home.allowedMethods())
// 装载page子路由
router.use('/page',page.routes(),page.allowedMethods())



app
    .use(router.routes())
    // router.allowedMethods()作用就是如果是post的请求就会发生错误，只能是指定的请求类型。
    // 父路由装载中间件
    .use(router.allowedMethods());

app.listen(3000,()=>{
    console.log("starting in port 3000");
})