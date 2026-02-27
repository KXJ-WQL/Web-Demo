<template>
    <h1>setup参数</h1>
    <div style="background-color:cadetblue;">
      <button @click="showProps">显示props的值</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HelloWorld',
    props: ["data"],
    emits:["set"],
    beforeCreate(){
        console.log("beforeCreate......")
    },

    setup(props,context){
     console.log("setup.....")

      function showProps(){
       console.log(props.data)
       context.emit('set')
      }

      return{
        showProps
      }
    }
  }
  </script>