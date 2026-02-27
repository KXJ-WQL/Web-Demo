<template>
    <h2>岗位：{{ person.station }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.salary }}K</h2>
    <h2>爱好：{{ person.hobby }}</h2>
    <button @click="person.station = 'lalala'">修改岗位</button>
    <button @click="person.age += 1">年龄++</button>
    <button @click="person.salary +=10 ">薪资：++</button>
    <button @click="person.hobby[1]='wawa' ">爱好：++</button>
  </template>
  
  <script>
  import { watch,reactive } from 'vue';
  
  export default {
    name: 'HelloWorld',
  
    props: {
      msg: String
    },
  
    setup(){
      let person = reactive({
        station: 'qrushi',
        age: 20,
        salary: 10,
        hobby:["lala"]
      })
      
      /**使用一：监视Reactive所定义的一个响应式数据的全部属性
       *    1.注意：此处无法正确的获取oldValue
       *    2.注意：强制开启了深度监视(deep配置无效)
       * **/
    //   watch(person,(newValue,oldValue)=>{
    //     console.log('person变化了',newValue,oldValue)
    //   })
      
      //使用二：监视reactive所定义的一个响应式数据中的某个属性
      // watch(()=>person.salary,(newValue,oldValue)=>{
      //   console.log('person.salary',newValue,oldValue)
      // })

      //使用三：监视reactive所定义的一个响应式数据中的某个属性
      watch([()=>person.salary,()=>person.age],(newValue,oldValue)=>{
        console.log('person.salary',newValue,oldValue)
      })

      //使用四：特殊情况
      watch(()=>person.hobby,(newValue,oldValue)=>{
        console.log('person.salary',newValue,oldValue)
      },{deep:true})

      return {
        person
      }
    }
  }
  </script>