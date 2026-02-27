<template>
    <div>
        <h1 style="color: rebeccapurple;">通过props进行父子组件传值</h1>
        <h2>姓名：{{myname}}</h2>
        <h2>性别：{{sex}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="UpdataProps">更新props中的name值</button>
        <hr>
    </div>
</template>

<script>
     export default {
        data(){
            return{
                myname:this.name
          }
      },
      //方式1：只接收
      //props:['name','sex','age']

      //方式2：接收并限制类型
    //   props:{
    //     name:String,
    //     sex:String,
    //     age:Number
    //   }
      //方式3：限制类型、限制必要性、指定默认值
      props:{
        name:{
            type:String,
            default:"空想家"
        },
        sex:{
            type:String,
            required:true
        },
        age:{
            type:Number,
            default:100
        }
     },
     methods:{
        UpdataProps(){
            this.myname="幽蓝梦魇"
        }
     }
     }
</script>

<style>

</style>