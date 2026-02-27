<template>
    <br>
    <button @click=" showRawReactivePerson "> toRaw转化reactive数据为普通对象 </button>
    <button @click=" showRawRefPerson "> toRaw转化ref数据为普通对象 </button>
    <button @click=" showMarkRawReactivePerson "> markRaw转化reactive数据为普通对象 </button>
    <button @click=" showMarkRawRefPerson "> markRaw转化普通对象使其不被转换为响应式对象 </button>
</template>


<script>
import { reactive,ref,toRaw,markRaw } from 'vue';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        setup(){
            //ref数据
            let person1 = ref({
                station: "gangwei",
                age: 25,
                salary: 8521
            })

            //reactive数据
            let person2 = reactive({
                station: "gangwei",
                age: 25,
                salary: 8521
            })

            function showRawReactivePerson(){
                const a = toRaw(person2) 
                console.log(a)
            }

            function showRawRefPerson(){
                const a = toRaw(person1) 
                console.log(a)
            }

            function showMarkRawReactivePerson(){
                const a = markRaw(person2) 
                console.log(a)
            }

            function showMarkRawRefPerson(){
                const per ={
                    name:"aaa",
                    age:"12"
                }
                person2.per =  markRaw(per)
                console.log(person2.per)
            }

            return {
                person1,
                person2,
                showRawReactivePerson,
                showRawRefPerson,
                showMarkRawReactivePerson,
                showMarkRawRefPerson
                
            }
        }
    }
</script>