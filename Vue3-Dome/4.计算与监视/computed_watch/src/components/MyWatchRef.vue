<template>
    <h2>当前求和：{{ sum  }}</h2>
    <button @click="sum++">累加器</button>
    <br>
    <h2>当前消息为：{{ msg  }}</h2>
    <button @click="msg+='~'">添加消息</button>

    <h2>当前消息为：{{ person  }}</h2>
    <button @click="person.station+='~'">添加对象消息</button>
  </template>
  
  <script>
  import { watch,ref } from 'vue';
  
  export default {
    name: 'HelloWorld',
  
    props: {
      msg: String
    },
  
    setup(){
      let sum = ref(0)
      let msg = ref("消息")
      let person = ref({
        station: 'qrushi',
        age: 20,
        salary: 10,
      })
      
      //使用一：监视ref所定义的一个响应式数据
      watch(sum,(newValue,oldValue)=>{
        console.log('sum变了',newValue,oldValue)
      })
      
      //使用二：监视ref所定义的多个响应式数据
      watch([sum,msg],(newValue,oldValue)=>{
        console.log('sum或msg变了',newValue,oldValue)
      })

      //使用三：监视ref定义的当个对象类型属性的响应式数据
      watch(person.value,(newValue,oldValue)=>{
        console.log('person对象属性变更',newValue,oldValue)
      })
      
      watch(person,(newValue,oldValue)=>{
        console.log('person对象属性变更',newValue,oldValue)
      },{deep:true})

      return {
        sum,
        msg,
        person
      }
    }
  }
  </script>