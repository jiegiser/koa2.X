
var cors = require('koa-cors');

const Koa=require('koa');
const app=new Koa();
app.use(cors());
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
            <input name="passWord"/><br/>
            
            <br/>
            <button type="submit">submit</button>
        </form>
        `;
        ctx.body=html;
    }else if(ctx.url==='/'&& ctx.method==='POST'){
        let postData=await parsePostData(ctx);
        console.log("jieguo"+postData);
        console.log(postData.indexOf("jiegiser"));
        if(postData.indexOf("jiegiser")<=-1){
            ctx.body=1;
        }else{
            ctx.body=0;
        }
        
    }else{
        ctx.body='<h1>404!</h1>'
    }

})
function parsePostData(ctx){
    return new Promise((resolve,reject)=>{
        try{
            // 接收post的参数
            let postData="";
            // 如果有数据传入的时候，
            ctx.req.addListener('data',(data)=>{
                postData+=data
            })
            // on方法和前面使用addListener添加监听事件一样
            ctx.req.on('end',function(){
                //返回json对象
                let parseData=postData;
                resolve(parseData);
            })
        }catch(error){
            reject(error);
        }
    })
}
function parseQueryStr(queryStr){
    let queryData={};
    // userName=jiegiser&age=18&webSite=http%3A%2F%2Fjiegiser.win
    // 将我们接收得到的值以&分割成数组
    let queryStrList=queryStr.split('&');
    //console.log(queryStrList);
    //console.log(queryStrList.entries());
    // queryStrList.entries()返回带索引的数组
    for(let [index,queryStr] of queryStrList.entries()){
        // userName=jiegiser将这个分成数组
        let itemList=queryStr.split('=');
        console.log(itemList);
        // decodeURICompoment这个方法是将我们用户传入的中文会encode加密，我们这个进行解密存储
        queryData[itemList[0]]=decodeURIComponent(itemList[1]);
    }
    return queryData;
}
app.listen(3000,()=>{
    console.log('[demo] server is starting at port 3000');
});