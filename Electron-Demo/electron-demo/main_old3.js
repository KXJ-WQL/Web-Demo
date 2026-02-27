//引入electron模块并解构出两个依赖 -> app(主进程)和BrowserWindow
const {app , BrowserWindow} = require('electron')

let mainwin;//父窗口
let childWindow;//子窗口

//当app启动之后执行窗口创建等操作
app.whenReady().then(()=>{

    //创建浏览器窗口
    mainwin = new BrowserWindow({
        width : 800,
        height : 500,
        show:true,
        backgroundColor: '#dfb3b3',
        title:"空想家",
    })

    //在窗口中加载指定界面让它显示具体的内容
    mainwin.loadFile("index.html")

    // 创建子窗口
    createChildWindow();
})
 

function createChildWindow(){
     // 创建子窗口
   childWindow = new BrowserWindow({
    width: 400,
    height: 300,
    parent: mainwin,  // 将主窗口设置为父窗口
    modal: true,         // 子窗口模态（禁止与父窗口之外的界面交互）
    webPreferences: {
      nodeIntegration: true,
    },
  });

  // 加载子窗口的 HTML 文件
  childWindow.loadFile('child.html');

  // 监听子窗口关闭事件
  childWindow.on('closed', () => {
    childWindow = null;
  });
}