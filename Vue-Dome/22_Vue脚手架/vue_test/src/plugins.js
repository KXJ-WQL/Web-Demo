//创建Vue插件
const pulgin = {
    install(Vue){
        console.log('@@@pulgin')
        //定义过滤器
        Vue.filter('mySlice',function(value){
            return value+"-> 啦啦"
        })
    }
}

//对外暴露
export default pulgin


