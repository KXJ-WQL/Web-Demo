<template>
    <div class="dome">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="showName">点击弹出学生名</button>
   </div>
</template>

<script>
  import {hunhe} from '../mixin' 
  export default {
      data(){
        return{
            name:"瑞兹",
            age:"21"
          }
      },
      mixins:[hunhe]
      // methods:{
      //   myclick(){
      //     alert(this.name)
      //   }
      // }
  }

</script>

<style scoped>
  .dome{
    background-color: royalblue;
  }
</style>