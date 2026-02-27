<template>
  <Parameter :data="data" @set="set"></Parameter>
</template>

<script>
import ReactiveTest from './components/ReactiveTest.vue'
import HelloWorld from './components/HelloWorld.vue'
import Parameter from './components/Parameter.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ReactiveTest,
    Parameter
  },
  setup(){

    let data = {
      phone : 15526446827,
      attr : "石家庄"
    }

    function set(){
      console.log("自定义事件触发~~~~~~~")
    }

    return {
      data,
      set
    }
  }
}
</script>
