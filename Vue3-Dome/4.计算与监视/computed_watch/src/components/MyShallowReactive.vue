<template>
    <h2>年龄：{{ person.age }}</h2>
    <h2>其他：{{ person.other }}</h2>
    <h2>num: {{ num }}</h2>
    <h2>objects: {{ objects.x }}</h2>
    <button @click="person.age += 1"> shallowReactiv外层修改 </button>
    <button @click="person.other.grandpa = 'kaka'"> shallowReactiv内存层修改 </button>
    <br>
    <button @click="num++"> shallowRef基本数据修改 </button>
    <button @click="objects.x++"> shallowRef对象数据修改 </button>
</template>


<script>
import { shallowReactive,shallowRef } from 'vue';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        setup(){
            let person = shallowReactive({
                age: 25,
                other:{
                    dad:"baba",
                    mam:"mam"
                }
            })

            let num = shallowRef(0)

            let objects = shallowRef({
                x:0
            })

            return {
                num,
                person,
                objects
            }
        }
    }
</script>













