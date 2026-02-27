<template>
   <input type="text" v-model="keyWord">
   <h3>{{ keyWord }}</h3>
</template>

<script>
    import { customRef } from 'vue';

    export default {
        name: 'HelloWorld',

        props: {
            msg: String
        },

        setup(){
            let timer;
            //自定义ref
            function myRef(value){
                return customRef((track,trigger)=>{
                    return {
                        get(){
                            console.log(`读取自定义ref函数数据${value}`)
                            track()
                            return value
                        },
                        set(newvalue){ 
                            console.log(`设置自定义ref函数数据${value}`)
                            clearTimeout(timer)
                            time = setTimeout(()=>{
                                value = newvalue
                                trigger()
                            },1000)
                           
                        }
                    }
                }) 
            }

            let keyWord =myRef("")

            return {
                keyWord
            }
        }
    }
</script>