<template>
    <div class="dome">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentToApp">向父组件发送学生名字</button>
   </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
      data(){
        return{
            name:"瑞兹",
            age:"21"
          }
      },
      methods:{
      sendStudentToApp(){
         //发布消息(消息标识:name 消息内容：name)
         pubsub.publish('studentname',this.name)
        }
      }
  }
</script>

<style scoped>
  .dome{
    background-color: royalblue;
  }
</style>