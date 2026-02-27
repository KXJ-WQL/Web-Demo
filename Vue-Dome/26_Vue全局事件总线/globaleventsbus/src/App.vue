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
  mounted(){
    this.$bus.$on("getSchool",this.getSchool)
    this.$bus.$on("getStudent",this.getSchool)
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