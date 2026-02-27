<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <h1 v-text="inf" ref="info"></h1>
    <button @click="showDOM">点击输出DOM元素</button>
    <Reftest ref="component" />
    <button @click="showVC">点击输出组件VC</button> -->

    <!-- <Propstest name="晴天" sex="男" age=200 />
    <Propstest sex="女" /> -->

    <School/>
    <Student/>
    
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
import Reftest from './components/Reftest.vue'
import Propstest from './components/Propstest.vue'

export default {
  name: 'App',
  data(){
    return{
      inf:"ref给元素注册引用信息"
    }
  },
  components: {
    School,
    Student,
    Reftest,
    Propstest
  },
  methods:{
    showDOM(){
      console.log(this.$refs.info)
    },
    showVC(){
      console.log(this.$refs.component)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>