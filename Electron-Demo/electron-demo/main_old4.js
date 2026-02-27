//引入electron模块并解构出两个依赖 -> app(主进程)和BrowserWindow
const {app , BrowserWindow , dialog} = require('electron')

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

    //右键打开对话框
    mainwin.webContents.on('context-menu',(event,params)=>{
        // dialog.showOpenDialog({
        //     buttonLabel: "选择文件",
        //     title: "文件导入",
        //     defaultPath: app.getPath('desktop'),
        //     filters:[
        //         {name:"文本文件", extensions:['txt','md']},
        //         { name: '所有文件', extensions: ['*'] },
        //     ],
        //     properties:['multiSelections','openFile'],
            
        // }).then((result)=>{
        //     console.log(result.filePaths)
        // })


        // dialog.showSaveDialog({
        //     buttonLabel:"保存文件wlq",
        //     title:"保存文件",
        //     defaultPath:app.getPath('cache'),
        //     filters:[
        //         {name:"文本文件", extensions:['txt','md']},
        //         { name: '所有文件', extensions: ['*'] },
        //     ],
        // }).then((result)=>{
        //     console.log(result)
        // })

        dialog.showMessageBox({
            title:"空想家对话框",
            detail:"我不是空想家！",
            type:"info",
            message:"是否删除",
            buttons:["确定","取消"]
        }).then((result)=>{
            console.log(result)
        })


    })

})
 

