const Koa = require('koa');
const app = new Koa();
// fs就是操作我们的文件流
const fs=require('fs');
app.use(async (ctx) => {
    let url = ctx.request.url;
    let html = await route(url); //await异步请求
    ctx.body = html; ///?dsd=121&sdsdsd=565656--输出我们的请求地址
})
function render(page){
    return new Promise((resolve,reject)=>{
        let pageUrl=`./page/${page}`;
        // readFile是读取文件的方法，第一个参数为文件的路径，第二个参数为以什么形式进行读取binary就是二进制
        // 第三个参数为回调函数，
        fs.readFile(pageUrl,"binary",(error,data)=>{
            if(error){
                reject(error);
            }else{
                resolve(data);
            }
        });
    })
}
async function route(url) {
    let page = '404.html';
    switch (url) {
        case '/':
            page = 'index.html';
            break;
        case '/index':
            page = 'index.html';
            break;
        case '/todo':
            page = 'todo.html';
            break;
        case '/404':
            page = '404.html';
            break;
        default:
            break;
    }
    let html=await render(page);//异步接收页面
    return html;
}

app.listen(3000);