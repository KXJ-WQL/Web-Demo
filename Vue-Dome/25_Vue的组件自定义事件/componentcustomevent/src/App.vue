<template>
  <div id="app">
      <h1>{{mes}}</h1>
      <Student v-on:getStudent="getStudent"/>
      <School ref="rzschool" @click.native="getSchool"/>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/Student.vue'

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
      alert(Schoolname)
    }
  },
  mounted(){
    //通过ref获取school组件的VC对象就行绑定事件
    //this.$refs.rzschool.$on("getSchool",this.getSchool)
    //直接方法回调会导致this指向问题
    this.$refs.rzschool.$on("getSchool",(name,...params)=>{
      console.log(this)
      this.Schoolname=name
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