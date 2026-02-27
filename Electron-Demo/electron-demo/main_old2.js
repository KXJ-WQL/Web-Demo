//引入electron模块并解构出两个依赖 -> app(主进程)和BrowserWindow
const {app , BrowserWindow, ipcMain} = require('electron')

//引入path路径模块
const path = require("path")

//当app启动之后执行窗口创建等操作
app.whenReady().then(()=>{

    //创建浏览器窗口
    const mainwin = new BrowserWindow({
        width : 800,
        height : 500,
        show:false,
        title:"空想家",
        webPreferences:{
            // nodeIntegration:true,//设置为true，可以在渲染进程中直接调用Node.js模块
            // contextIsolation:false,//设置为false，不启用上下文隔离
            preload: path.resolve(__dirname,'loading.js')
        }
    })

    //在窗口中加载指定界面让它显示具体的内容
    mainwin.loadFile("index.html")

    //主进程监听mymain事件
    ipcMain.on("mymain",(event,msg)=>{
        console.log(msg)
        //回复渲染进程一个异步消息
        event.returnValue = "主进程回复一个异步信息！！"
    })

    //主进程监听myinvoke事件
    ipcMain.on("myinvoke",(event,msg)=>{
        console.log(msg)
        event.reply("async-reply", "哥们我收到消息了-来自异步");    
    })
    
    //异步来回通信
    ipcMain.handle("myasync",async (event,args)=>{
        let someMessage = await Promise.resolve("我是异步回来的消息");
        console.log(someMessage)
        //返回返回值给渲染进程
        return someMessage;
    })

    //预加载调用
    ipcMain.handle("send-event",async (event,args)=>{
        let someMessage = await Promise.resolve("我是异步回来的消息");
        console.log(someMessage)
        //返回返回值给渲染进程
        return someMessage;
    })


    //提供app获取系统目录
    console.log(app.getPath('desktop'))//获取桌面路径
    console.log(app.getPath('music'))//获取音乐路径
    console.log(app.getPath('cache'))//获取缓存路径
    console.log(app.getPath('temp'))//获取临时路径
    console.log(app.getPath('userData'))//获取用户当前目录


    //加载页面成功后触发监听显示窗体
    mainwin.on('ready-to-show',()=>{
        mainwin.show()
    })

    //打开窗口开发者工具
    mainwin.webContents.openDevTools()

    //窗口关闭回调
    mainwin.on('close',()=>{
        console.log("close ~~~~~~~")
    })
})
 
//2. 当全部窗口都关闭的回调
app.on('window-all-closed',()=>{
    console.log("2.当全部窗口都关闭的回调")
    // app.quit()
})
