const fs = require("fs")

//获取上下文桥接
const {contextBridge,ipcRenderer} = require('electron')

const handleSend = async()=>{
    let fallback = await ipcRenderer.invoke('send-event',"hahaha")
    //console.log(fallback)
    return fallback

}

//在主进程中绑定对象到window，共享给渲染进程
contextBridge.exposeInMainWorld('myloading',{
    info:"注入数据到window对象，渲染通过window调用....",
    handleSend
})

console.log("预加载Load...",fs)