<template>
    <div class="dome">
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{address}}</h2>
        <button @click="showName">点击弹出学校名</button>
      </div>
</template>

<script>
  import {hunhe} from '../mixin'
  export default {
      // methods:{
      //   myclick(){
      //     alert(this.name)
      //   }
      // },
      data(){
        return{
          name:"符文学院",
          address:"符文之地"
          }
      },
      mixins:[hunhe]
  }

</script>

<style>
  .dome{
    background-color: orange;
  }
</style>