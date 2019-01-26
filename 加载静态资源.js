
const Koa=require('koa');
// 引入模板中间件
const static =require('koa-static');
// 引入node中原生的path路径包，这样就可以加载我们的ejs模板
const path=require('path');


const app=new Koa();


// 声明一个静态路径，这个作用就是：只允许访问static里面的
const staticPath='./static';


// 使用koa-static中间件加载，，path.join就是合并路径
// __dirname当前项目的根目录，node原生提供的。
app.use(static(path.join(__dirname,staticPath)))//---这样就可以访问我们的静态资源文件了
/*
比如我们站点下有一个static文件夹，里面有一张我们需要的静态资源，
在后台开发中不仅有需要代码处理的业务逻辑请求，也会有很多的静态资源请求。
比如请求js，css，jpg，png这些静态资源请求。也非常的多，有些时候还会访问静态资源路径。
用koa2自己些这些静态资源访问是完全可以的，但是代码会雍长一些。所以这节课我们利用koa-static中间件来实现静态资源的访问。

安装koa-static中间件
// npm install --save koa-static
*/
app.use(async(ctx)=>{
    let title="hello jiegiser";
    ctx.body=title;
})
app.listen(3000,()=>{
    console.log("server start");
})