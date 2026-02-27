<template>

    </template>
  <script>
  import { computed, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue';
  
  export default {
    name: 'HelloWorld',
  
    props: {
      msg: String
    },
  
    setup(){
        console.log("setup....")
      let person = reactive({
          firstname:"",
          lastname:""
      })

      onBeforeMount(()=>{
        console.log("onBeforeMount....")
      })

      onMounted(()=>{
        console.log("onMounted....")
      })

      onBeforeUpdate(()=>{
        console.log("onBeforeUpdate....")
      })

      onUpdated(()=>{
        console.log("onUpdated....")
      })
     
     onBeforeUnmount(()=>{
        console.log("onBeforeUnmount....")
      })
     
     onUnmounted(()=>{
        console.log("onUnmounted....")
      })

      return {
        person
      }
    },
    // beforeCreate(){
    //     console.log("beforeCreate....")
    // },

    // created(){
    //     console.log("created....")
    // },

    // beforeMount(){
    //     console.log("beforeMount....")
    // },

    // mounted(){
    //     console.log("mounted....")
    // },

    // beforeUpdate(){
    //     console.log("beforeUpdate....")
    // },

    // updated(){
    //     console.log("updated....")
    // },

    // beforeUnmount(){
    //     console.log("beforeUnmount....")
    // },

    // unmounted(){
    //     console.log("unmounted....")
    // }
  }
  </script>