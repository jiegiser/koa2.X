const Koa=require('koa');
const app =new Koa();
// 保存登录用户信息--cookie
// 写入cookie
app.use(async(ctx)=>{
    if(ctx.url==='/index'){
        //写入cookie
        // 可以在浏览器的调试面板中的Application中找到Cookie中可以看到存入的cookie
        ctx.cookies.set(
            'MyName','Jiegiser',{
                // 配置其他选项
                domain:'127.0.0.1',//域名---这里需要注意的是，必须是访问这个地址才会有cookie，访问localhost也是不可以的
                //path:'/index',//访问这个路径才可以读出cookie
                maxAge:1000*60*60*24,//cookie最长有效时间--以毫秒为单位
                expires:new Date('2019-12-31'),//cookie失效时间
                httpOnly:false,//允许只有在http的时候有效其他的值无效,false代表的就是不止在http的时候在https的时候也有效
                overwrite:false//是否允许重写
            }
        );
        ctx.body='Cookie is OK!'
    }else{
        // 读出cookie
        if(ctx.cookies.get('MyName')){
            ctx.body=ctx.cookies.get('MyName');
        }else{
            ctx.body="cookie is none"
        }
    }
})

app.listen('3000',()=>{
    console.log("server start");
})