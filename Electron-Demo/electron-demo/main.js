const {app , BrowserWindow, clipboard,nativeImage } = require('electron')


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


    //1.文本复制粘贴
    clipboard.writeText("啦啦啦啦")//复制
    const textparser = clipboard.readText()//粘贴
    console.log(textparser)

    //2.图片复制粘贴
    const imagePath = 'android-chrome.png';
    const imageToCopy = nativeImage.createFromPath(imagePath);
    clipboard.writeImage(imageToCopy);//图片复制
    const imageperse = clipboard.read()//图片粘贴
    console.log(imageperse)
})
 

