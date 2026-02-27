<template>
    <div class="dome">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolToApp">向父组件发送学校名字</button>
      </div>
</template>

<script>
  import pubsub from 'pubsub-js'
  export default {
      methods:{
        sendSchoolToApp(){
          //发布消息(消息标识:name 消息内容：name)
          pubsub.publish('schoolname',this.name)
        }
      },
      data(){
        return{
          name:"符文学院",
          address:"符文之地"
          }
      },
  }
</script>

<style>
  .dome{
    background-color: orange;
  }
</style>