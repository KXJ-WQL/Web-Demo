//引入electron模块并解构出两个依赖 -> app(主进程)和BrowserWindow
const {app , BrowserWindow , globalShortcut} = require('electron')

let mainwin;//父窗口

//当app启动之后执行窗口创建等操作
app.whenReady().then(()=>{

    //创建浏览器窗口
    mainwin = new BrowserWindow({
        width : 800,
        height : 500,
        backgroundColor: '#dfb3b3',
        title:"空想家",
    })

    //在窗口中加载指定界面让它显示具体的内容
    mainwin.loadFile("index.html")

    //注册快捷键
    globalShortcut.register("Ctrl+y",()=>{
        console.log("aaaaa")
    })

    //是否注册了Ctrl+x快捷键
    console.log(globalShortcut.isRegistered("Ctrl+x"))

})
 

