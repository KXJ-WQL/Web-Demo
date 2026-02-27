<template>
  <div id="app">
    <button @click="getStudent">获取NodeJS中的学生信息</button>
    <button @click="getCars">获取NodeJS中的汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',
  methods:{
    getStudent(){
      //携带请求前缀访问
      axios.get('http://localhost:8080/admin/students').then(
          response =>{
            console.log('请求成功',response.data)
          },
          error =>{
            console.log('请求失败',error.message)
          }
      )
    },
    getCars(){
      //携带请求前缀访问
      axios.get('http://localhost:8080/api/cars').then(
          response =>{
            console.log('请求成功',response.data)
          },
          error =>{
            console.log('请求失败',error.message)
          }
      )
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
