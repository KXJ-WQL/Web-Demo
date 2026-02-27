<template>
  <div style="background-color: chocolate;width: 400px; height: 300px;padding: 10px;">
    <button @click="isShow = !isShow">显示子组件</button>
    <!--Suspense的使用-->
    <!-- <Suspense>
      <template v-slot:default>
        <MySuspense v-if="isShow"  msg="Hello Vue 3.0 + Vite" />
      </template>
      <template v-slot:fallback>
        <h2>正在加载...</h2>
      </template>
    </Suspense> -->
   
    <MySyntacticSugar></MySyntacticSugar>

  </div>
</template>

<script>
import MyComputed from './components/MyComputed.vue'
import MyWatchRef from './components/MyWatchRef.vue'
import MyWatchReactive from './components/MyWatchReactive.vue'
import MyWatchEffect from './components/MyWatchEffect.vue'
import MyLeft from './components/MyLeft.vue'
import MyHooks from './components/MyHooks.vue'
import MytoRef from './components/MytoRef.vue'
import MyShallowReactive from './components/MyShallowReactive.vue'
import MyReadOnly from './components/MyReadOnly.vue'
import MyToRaw from './components/MyToRaw.vue'
import MyCustomref from './components/MyCustomref.vue'
import MyProvide from './components/MyProvide.vue'
import MyTeleport from './components/MyTeleport.vue'
import MySyntacticSugar from './components/MySyntacticSugar.vue'

//1.异步引入组件
const MySuspense  = defineAsyncComponent(()=>import('./components/MySuspense.vue'))

import { defineAsyncComponent, isProxy, isReactive, isReadonly, isRef, provide, reactive, readonly, ref } from 'vue';
export default {
  name: 'App',
  components: {
    MyComputed,
    MyWatchRef,
    MyWatchReactive,
    MyWatchEffect,
    MyLeft,
    MyHooks,
    MytoRef,
    MyShallowReactive,
    MyReadOnly,
    MyToRaw,
    MyCustomref,
    MyProvide,
    MyTeleport,
    MySuspense,
    MySyntacticSugar
  },
  setup(){
    let isShow = ref(true)

    //传递数据给子组件
    let name = ref("wql")
    provide('name',name)

    let myref = ref("a")
    let myreactive = reactive({"a":100})
    let myReadonly = readonly({"a":100})
    console.log(isRef(myreactive))
    console.log(isReactive(myreactive))
    console.log(isReadonly(myReadonly))
    console.log(isProxy(myreactive))
    return{
      isShow
    }
  }
}
</script>