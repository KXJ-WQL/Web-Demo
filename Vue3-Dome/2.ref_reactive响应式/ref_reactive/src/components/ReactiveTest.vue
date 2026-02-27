<template>
    <h1>Reactive对象复合类型</h1>
    <div style="background-color:cadetblue;">
      <h2>姓名：{{data.name}}</h2>
      <h2  v-show="data.age">年龄：{{data.age}}</h2>
      <h2>地址：{{data.attr}}</h2>
      <h2>特征词：{{data.title}}</h2>
      <h2 v-show="data.position">位置：{{data.position}}</h2>
      <button @click="alterCompositeData">修改</button>
      <button @click="addPosition">添加位置</button>
      <button @click="delAttribute">删除属性</button>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue'
  export default {
    name: 'HelloWorld',
    props: ["data"],
  
    setup(props,context){
      //对象复合类型
      let data=reactive({
        name : "蛮族之王-泰达米尔",
        age : 64,
        attr : "弗雷尔卓德",
        title : "怒气，即是我的武器"
      })
  
      function alterCompositeData(){
        data.name = "寒冰射手-艾希"
        data.age = 24
        data.attr = "弗雷尔卓德"
        data.title = "一个部族,一个民族,一个弗雷尔卓德"
        console.log(data)
      }

      function addPosition(){
        data.position = ["ADC","射手","控制"]
      }

      function delAttribute(){
        delete data.age

      }
  
      return{
        data,
        alterCompositeData,
        addPosition,
        delAttribute
      }
    }
  }
  </script>