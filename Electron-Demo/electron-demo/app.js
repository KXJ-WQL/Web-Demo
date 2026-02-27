// //引入ipcRenderer模块
// const {ipcRenderer} = require('electron')



// document.querySelector("#btn").addEventListener('click',()=>{

//     //异步发送信息给主进程并等待返回结果
//     let msg = ipcRenderer.sendSync("mymain","主进程信息")
//     console.log("接收主进程返回结果==>",msg)
// })

// document.querySelector("#btn_invoke").addEventListener('click',()=>{
//     ipcRenderer.send("myinvoke","主进程信息")
// })

// document.querySelector("#btn_async").addEventListener('click',()=>{
//     (async () => {
//         let result = await ipcRenderer.invoke("myasync");
//         console.log(result);
//     })();
// })

document.querySelector("#proload").addEventListener('click',async()=>{
   let a= await window.myloading.handleSend()
   console.log(a)
})


// //监听主进程的async-reply事件
// ipcRenderer.on("async-reply", (event, arg) => {
//     console.log("异步消息:", arg);
//   });
