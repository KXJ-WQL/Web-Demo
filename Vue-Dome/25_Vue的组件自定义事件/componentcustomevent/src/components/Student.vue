<template>
    <div class="dome">
        <h2>学生名称：{{name}}</h2>
        <h2>学生年龄：{{age}}</h2>
        <button @click="sendStudentToApp">向父组件发送学生名字</button>
        <button @click="unbind">解绑自定义事件</button>
        <button @click="destroyrqi">销毁容器</button>
   </div>
</template>

<script>
  export default {
      data(){
        return{
            name:"瑞兹",
            age:"21"
          }
      },
      methods:{
      sendStudentToApp(){
         this.$emit("getStudent",this.name)
        },
        unbind(){
          this.$off('getStudent')
        },
        destroyrqi(){
          this.$destroy()
        }
      }
  }

</script>

<style scoped>
  .dome{
    background-color: royalblue;
  }
</style>