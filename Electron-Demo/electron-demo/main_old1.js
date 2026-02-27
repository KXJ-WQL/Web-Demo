//引入electron模块并解构出两个依赖 -> app(主进程)和BrowserWindow
const {app , BrowserWindow, ipcMain} = require('electron')
//引入path路径模块
const path = require("path")
//初始化remote远程模块
require('@electron/remote/main').initialize()
//当app启动之后执行窗口创建等操作
app.whenReady().then(()=>{

    //创建浏览器窗口
    const mainwin = new BrowserWindow({
        width : 800,
        height : 500,
        minHeight:300,
        minWidth:600,
        maxWidth:1000,
        maxHeight:800,
        show:false,
        resizable:false, //禁止缩放窗体
        title:"空想家",
        icon:"",
        frame:true,
        autoHideMenuBar:true,
        webPreferences:{
            // nodeIntegration:true,//设置为true，可以在渲染进程中直接调用Node.js模块
            // contextIsolation:false,//设置为false，不启用上下文隔离
            // enableRemoteModule:true, //设置为true允许在渲染进程中使用remote模块
            preload: path.resolve(__dirname,'loading.js')
        }
    })

    //在窗口中加载指定界面让它显示具体的内容
    mainwin.loadFile("index.html")

    //加载页面成功后触发监听显示窗体
    mainwin.on('ready-to-show',()=>{
        mainwin.show()
    })

    ipcMain.handle
    // ipcMain.on;
    // ipcMain.removeListener;
    // ipcMain.

    //窗口关闭回调
    mainwin.on('close',()=>{
        console.log("close ~~~~~~~")
    })
    
    // mainwin.webContents.on('dom-ready',()=>{
    //     console.log('1.渲染进程准备好加载页面')
    // })

    // //2.当渲染进程完成加载时触发
    // mainwin.webContents.on('did-finish-load',()=>{
    //     console.log('2.当渲染进程完成加载时触发')
    // })

    // //3.当渲染进程加载失败时触发
    // mainwin.webContents.on('did-fail-load',()=>{
    //     console.log('3.当渲染进程加载失败时触发')
    // })

    // //4.渲染进程中的一个框架完成加载时触发
    // mainwin.webContents.on('did-frame-finish-load',()=>{
    //     console.log('4.渲染进程中的一个框架完成加载时触发')
    // })
    // //5.在渲染进程中开始导航时触发
    // mainwin.webContents.on('will-navigate',()=>{
    //     console.log('5.在渲染进程中开始导航时触发')
    // })
    //打开窗口开发者工具
    mainwin.webContents.openDevTools()
})

// 1. 准备创建浏览器窗口
// app.on('ready', () => {
//     console.log("1.准备创建浏览器窗口")
//   });

//2. 当全部窗口都关闭的回调
app.on('window-all-closed',()=>{
    console.log("2.当全部窗口都关闭的回调")
    // app.quit()
})

//3. 应用即将退出
// app.on('before-quit',()=>{
//     console.log("3.当全部窗口都关闭的回调")
// })

// //4. 窗口都被关闭，应用将退出时触发
// app.on('will-quit',()=>{
//     console.log("4.窗口都被关闭，应用将退出时触发")
//     app.quit()
// })

// //5. 应用已退出
// app.on('quit',()=>{
//     console.log("5.应用已退出")
//     app.quit()
// })