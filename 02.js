// 安装插件koa-router
// npm install --save koa-router      --save就是使用保存本地-开发环境。
const Koa=require('koa');
const Router=require('koa-router');


const app=new Koa();
// 里面是一个对象，可以添加层级，比如我们现在访问就需要所有的路径前面加一个jiegiser了
// http://localhost:3000/jiegiser/todo
const router=new Router({
    prefix:'/jiegiser'
});


router
    .get('/',(ctx,next)=>{
        ctx.body="hello jiegiser"
    })
    .get('/todo',(ctx,next)=>{
        ctx.body="Todo page"
    })

app
    .use(router.routes())
    // router.allowedMethods()作用就是如果是post的请求就会发生错误，只能是指定的请求类型。
    .use(router.allowedMethods());


    
app.listen(3000,()=>{
    console.log("starting in port 3000");
})