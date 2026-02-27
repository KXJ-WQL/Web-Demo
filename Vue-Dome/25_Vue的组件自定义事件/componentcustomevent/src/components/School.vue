<template>
    <div class="dome">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="sendSchoolToApp">向父组件发送学校名字</button>
        <button @click="unbind">解绑自定义事件</button>
        <button @click="destroyrqi">销毁容器</button>
      </div>
</template>

<script>
  export default {
      methods:{
        sendSchoolToApp(){
          this.$emit("getSchool",this.name)
        },
        unbind(){
          this.$off('getSchool')
        },
        destroyrqi(){
          this.$destroy()
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