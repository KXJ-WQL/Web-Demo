<template>
  <h2>姓名：{{name}}</h2>
  <h2>年龄：{{age}}</h2>
  <h2>地址：{{attr}}</h2>
  <h2>特征词：{{title}}</h2>
  <button @click="setups">修改</button>
  <button @click="toAccessVue3">vue2访问vue3的属性方法</button>
  <button @click="toAccessVue2">vue3访问vue2的属性方法</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  //vue2的写法配置
  data(){
    return{
      briefIntroduction:"vue2特性写法",
  }},
  methods:{
    toAccessVue3(){
      this.setups()
      console.log(this.name,this.age,this.attr,this.title)
    }
  },

  //vue3写法配置
  setup(){
    //定义变量属性
    let name = "疾风剑豪-亚索"
    let age = "35"
    let attr = "艾欧尼亚"
    let title = "死亡如风，常伴吾身"
    function setups() {
      // name = "封魔剑魂"
      // age = "41"
      // attr = "艾欧尼亚"
      // title ="它们眼中的我，只有面具。我眼中的它们，只有惶恐"
      alert(`我叫${name},今年年龄${age},居住在${attr}`)
    }
    function toAccessVue2(){
      console.log(this.briefIntroduction)
    }
    //返回属性和方法
    return {
      name,
      age,
      attr,
      title,
      setups,
      toAccessVue2
    }
  }
}
</script>

<style scoped>
</style>
