
// 安装视图引擎模板
// npm install --save koa-views
// ejs模板引擎--在php、java等中
// 安装ejs
// npm install --save ejs
const Koa=require('koa');
// 引入模板中间件
const views =require('koa-views');
// 引入node中原生的path路径包，这样就可以加载我们的ejs模板
const path=require('path');


const app=new Koa();

// 使用中间件加载，引入模板路径，path.join就是合并路径
// __dirname当前项目的根目录，node原生提供的。
app.use(views(path.join(__dirname,'./view'),{
    // 说明模板引擎
    extension:'ejs'
}))

app.use(async(ctx)=>{
    let title="hello jiegiser";
    // await 就是异步请求我们的index模板，请求到后，执行下面的
    await ctx.render('index',{
        title
    })
})
app.listen(3000,()=>{
    console.log("server start");
})