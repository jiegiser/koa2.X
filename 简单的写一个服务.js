const Koa = require('koa');
const app = new Koa();
// 异步请求
app.use(async(ctx)=>{
    console.log(ctx);
    ctx.body='jiegiser';
})
app.listen(3000);
console.log('app is starting at port 3000');