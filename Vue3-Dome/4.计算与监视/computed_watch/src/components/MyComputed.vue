<template>
  <h2>一个个人信息</h2>
  姓:<input type="text" v-model="person.firstname">
  <br/>
  名:<input type="text" v-model="person.lastname">
  <br/>
  姓名:<input type="text" v-model="CompleteFullName">
  <br/>
  姓名:<b>{{ CompleteFullName }}</b>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
  name: 'HelloWorld',

  props: {
    msg: String
  },

  setup(){

    let person = reactive({
        firstname:"",
        lastname:""
    })

    //1.单独声明
    //1.1 简写形式(只读)
    let EasyFullName = computed(
      () => {
        return person.firstname + "-" + person.lastname
      }
    )
    //1.2 完整写法可读可写
    let CompleteFullName = computed({
      get(){
        return person.firstname + "-" + person.lastname
      },
      set(value){
       const nameArr = value.split('-')
       person.firstname = nameArr[0]
       person.lastname = nameArr[1]
      }
    })

    //2.源对象上声明
    //2.1 简写形式(只读)
    person.EasyFullName = computed(()=>{
      return person.firstname + "-" + person.lastname
    })
    //2.2 完整写法可读可写
    person.CompleteFullName = computed({
      get(){
        return person.firstname + "-" + person.lastname
      },
      set(value){
       const nameArr = value.split('-')
       person.firstname = nameArr[0]
       person.lastname = nameArr[1]
      }
    })

    return {
      EasyFullName,
      CompleteFullName,
      person
    }
  }
}
</script>