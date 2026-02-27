<template>
    <h2>岗位：{{ station }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ salary }}K</h2>
    <h2>其他：{{ other }}</h2>
    <button @click="age += 1"> 修改年龄 </button>
    <button @click="other.grandpa = 'kaka'"> 添加other对象 </button>
</template>


<script>
import { reactive,ref,toRef, watch,toRefs } from 'vue';


    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        setup(){
            let person = reactive({
                station: "gangwei",
                age: 25,
                salary: 8521,
                other:{
                    dad:"baba",
                    mam:"mam"
                }
            })

            watch(person,(newValue,oldValue)=>{
                console.log("person发生改变~~")
            })
            console.log(toRefs(person))

            return {
                // station: toRef(person,'station'),
                // age: toRef(person,'age'),
                // salary: toRef(person,'salary'),
                // other: toRef(person,'other')
                ...toRefs(person)
            }
        }
    }
</script>