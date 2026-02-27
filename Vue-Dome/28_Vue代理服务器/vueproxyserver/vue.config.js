const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  // devServer:{
  //   proxy:'http://localhost:5000'
  // }
  
  devServer:{
    //代理配置
    proxy:{
      //设置请求前缀
      '/admin':{
        //设置代理的真实服务器地址
        target:'http://localhost:5000',
        //路径重写,请求真实服务器时不携带请求标识
        pathRewrite:{'^/admin':''},
        ws:true
      },
      '/api':{
        target:'http://localhost:5001',
        pathRewrite:{'^/api':''},
        ws:true,
        changeOrigin: true
      }
    }
  }
})
