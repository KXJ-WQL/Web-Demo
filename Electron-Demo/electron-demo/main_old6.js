//1.引入menu菜单项
const {app , BrowserWindow ,Menu} = require('electron')

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

    //2.构建菜单模块
    const template = [
        {
            label:"文件",
            submenu:[
                {label:"新建",accelerator:"CmdOrCtrl+N",click:()=>{console.log("文件新建")}},
                {label:"打开",accelerator:"CmdOrCtrl+O",click:()=>{console.log("文件打开")}}
            ]
        },{
            label:"编辑",
            submenu:[
                {label:"撤销",accelerator:"CmdOrCtrl+Z",click:()=>{console.log("文件撤销")}},
                {label:"重做",accelerator:"CmdOrCtrl+B",click:()=>{console.log("文件重做")}},
                {type:"separator"},
                {label:"剪切",accelerator:"CmdOrCtrl+X",click:()=>{console.log("文件剪切")}}
            ]
        },{
            label:"类型",
            submenu:[
                {label:"晴天",type:"checkbox"},
                {label:"阴天",type:"checkbox"},
                {label:"雨天",type:"checkbox"},
                {type:"separator"},
                {label:"上班",type:"radio"},
                {label:"下班",type:"radio"}
            ]
        },{
            label:"角色",
            submenu:[
                {label:"最小化",role:"minimize"},
                {label:"关闭窗口",role:"close"},
                {label:"撤销",role:"undo"},
                {type:"separator"},
                {label:"复制",role:"copy"},
                {label:"剪切",role:"cut"}
            ]
        }
    ]

    //3.创建菜单实例
   const menus = Menu.buildFromTemplate(template)

    //4.设置到应用菜单中
    Menu.setApplicationMenu(menus)

})
 

