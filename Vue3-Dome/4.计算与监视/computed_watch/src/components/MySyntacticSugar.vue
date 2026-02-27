<template>
    <h2>一个个人信息</h2>
    姓:<input type="text" v-model="person.firstname">
    <br/>
    名:<input type="text" v-model="person.lastname">
    <br/>
  </template>
  
  <script setup>
  import { reactive } from 'vue';
  
    let person = reactive({
        firstname:"",
        lastname:""
      })
  
  </script>

