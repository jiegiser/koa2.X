// 使用一个中间件插件，koa-bodyparser    --就是将我们的post请求的东西进行转换，就像在03的例子中写的一样
// 他会直接将我们的post请求转换到ctx.request.body中


// 首先安装 npm install --save koa-bodyparser@3

const Koa=require('koa');
const app=new Koa();
const bodyparser=require('koa-bodyparser');
app.use(bodyparser());
app.use(async(ctx)=>{
// 如果ctx为我们的根目录，并且请求为GET请求的时候
    // ctx.method会获取到请求的类型
    if(ctx.url==='/' && ctx.method==='GET'){
        //显示表单页面
        let html=`
        <h1>jiegiser post请求</h1>
        <form method="POST" action="/">
            <p>username</p>
            <input name="userName"/><br/>
            <p>age</p>
            <input name="age"/><br/>
            <p>webSite</p>
            <input name="webSite"/><br/>
            <button type="submit">submit</button>
        </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/'&& ctx.method==='POST'){
        // 使用中间件插件，koa-bodyparser 他会将我们的post请求转换到ctx.request.body中
        let postData=ctx.request.body;
        ctx.body=postData;
    }else{
        ctx.body='<h1>404!</h1>'
    }
});
app.listen(3000)