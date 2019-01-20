// import { resolve } from "path";

// function getSomeTHing(){
//     return 'something'
// }
// // 前面加一个async将函数设置为异步的函数
// async function testAsync(){
//     return 'hello'
// }
// // await外层必须是一个异步的方法。
// // 等待await不仅可以接受promise对象，也可以接受普通的函数的返回值
// async function test(){
//     const v1=await getSomeTHing();
//     const v2=await testAsync();
//     console.log(v1,v2);
// } 
// // const result=testAsync();
// // console.log(result);//promise()对象
// test();


function takeLongTime(){
    return new Promise(resolve=>{
        setTimeout(()=>resolve('long time value'),1000);
    });
}
async function test(){
    const v=await takeLongTime();
    console.log(v);
}