const {app , BrowserWindow, Tray, Menu } = require('electron')

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

    //1.创建拖盘
    const tray = new Tray("android-chrome.png") 

    //2.创建菜单
    const contextMenus = Menu.buildFromTemplate([
        {label:"打开",click:()=>{mainwin.show()}},
        {label:"退出",click:()=>{app.quit()}}
    ])

    //3.设置菜单到系统托盘
    tray.setContextMenu(contextMenus)

    //4.设置托盘事件
    tray.on('click',()=>{
        mainwin.show()
    })

})
 

