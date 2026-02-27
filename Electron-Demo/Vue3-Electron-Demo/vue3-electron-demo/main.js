const { app, BrowserWindow } = require('electron')

const WinState = require('electron-win-state').default

const path = require('path')

const createWindow = ()=>{

    //创建持久化窗体大小位置win-state对象
    const winState = new WinState({
        defaultWidth:1000,//默认宽度
        defaultHeight:800,//默认高度
        winState:{ 
            dev:true ,
            addMethods : true 
        } 
    })

    //创建一个窗口
    const win = new BrowserWindow({
        ...winState.winOptions,
        webPreferences:{
            //指定预加载
            preload:path.resolve(__dirname,'./preload')
        }
    })

    //加载本地Vue的URL
    win.loadURL("http://127.0.0.1:3000/")

    //开启调试窗口
    win.webContents.openDevTools();

    //启动并管理窗体
    winState.manage(win)
}

//当app启动之后执行窗口创建操作
app.whenReady().then(()=>{
    createWindow()
})
