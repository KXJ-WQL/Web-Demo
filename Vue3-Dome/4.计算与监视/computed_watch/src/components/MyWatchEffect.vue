<template>
    <h2>当前求和：{{ sum  }}</h2>
    <button @click="sum++">累加器</button>
  </template>
  
  <script>
  import { watchEffect,ref } from 'vue';
  
  export default {
    name: 'HelloWorld',
  
    props: {
      msg: String
    },
  
    setup(){
      let sum = ref(0)
      let mes = ref("lala")
     
      watchEffect(()=>{
        const x = sum.value
        const y = mes.value
        console.log("watchEffect自动追踪依赖",sum)
      })
      return {
        sum,
        mes
      }
    }
  }
  </script>