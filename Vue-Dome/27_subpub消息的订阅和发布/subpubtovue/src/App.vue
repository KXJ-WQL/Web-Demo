<template>
  <div id="app">
      <h1>{{mes}}</h1>
      <Student/>
      <School/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'
import pubsub from 'pubsub-js'

export default {
  name: 'App',
  data(){
    return{
      mes:"组件自定义事件",
      Schoolname:''
    }
  },
  components: {
    School,
    Student
  },
  methods:{
    getStudent(Studentname){
      console.log(Studentname)
    },
    getSchool(Schoolname){
      console.log(Schoolname)
    }
  },
  //挂载时为组件订阅消息
  mounted(){
    //订阅消息
    pubsub.subscribe('studentname',function(mesname,data){//接收两个参数，mesname为消息头，data为消息内容
        console.log('消息头：'+mesname)
        console.log('消息内容：'+data)
    })
    pubsub.subscribe('schoolname',function(mesname,data){//接收两个参数，mesname为消息头，data为消息内容
        console.log('消息头：'+mesname)
        console.log('消息内容：'+data)
   })
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
  background-color: blanchedalmond;
}
</style>