<template>
  <h1>ref基本类型</h1>
  <div style="background-color: antiquewhite;">
    <h2>姓名：{{name}}</h2>
    <h2>年龄：{{age}}</h2>
    <h2>地址：{{attr}}</h2>
    <h2>特征词：{{title}}</h2>
    <button @click="alterBasicData">修改</button>
  </div>

  <h1>ref对象复合类型</h1>
  <div style="background-color:cadetblue;">
    <h2>姓名：{{data.name}}</h2>
    <h2>年龄：{{data.age}}</h2>
    <h2>地址：{{data.attr}}</h2>
    <h2>特征词：{{data.title}}</h2>
    <button @click="alterCompositeData">修改</button>
  </div>
  
</template>

<script>
import { ref } from 'vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  setup(){
    //基本类型
    let name = ref("蛮族之王-泰达米尔")
    let age = ref(64)
    let attr = ref("弗雷尔卓德")
    let title = ref("怒气，即是我的武器")
    //对象复合类型
    let data=ref({
      name : "蛮族之王-泰达米尔",
      age : 64,
      attr : "弗雷尔卓德",
      title : "怒气，即是我的武器"
    })

    function alterBasicData(){
      name.value = "寒冰射手-艾希"
      age.value = 24
      attr.value = "弗雷尔卓德"
      title.value = "一个部族,一个民族,一个弗雷尔卓德"
      console.log(name)
    }

    function alterCompositeData(){
      data.value.name = "寒冰射手-艾希"
      data.value.age = 24
      data.value.attr = "弗雷尔卓德"
      data.value.title = "一个部族,一个民族,一个弗雷尔卓德"
      console.log(data)
      alert(data.value.name)
    }

    return{
      name,
      age,
      attr,
      title,
      data,
      alterBasicData,
      alterCompositeData
    }
  }
}
</script>
