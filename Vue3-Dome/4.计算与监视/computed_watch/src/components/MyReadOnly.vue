<template>
    <h2>person1年龄：{{ person1.age }}</h2>
    <h2>person1其他：{{ person1.other }}</h2>
    <h2>person2年龄：{{ person2.age }}</h2>
    <h2>person2其他：{{ person2.other }}</h2>
    <button @click = "person1.age += 1"> Readonly深只读尝试修改 </button>
    <button @click = "person2.age += 1"> shallowReadonly浅只读尝试修改第一层对象 </button>
    <button @click = "person2.other.grandpa = 'kaka'"> shallowReadonly浅只读尝试修改第二层对象 </button>
</template>

<script>
    import { readonly,shallowReadonly } from 'vue';

    export default {
        name: 'HelloWorld',

        props: {
            msg: String
        },

        setup(){
            let person1 = readonly({
                age: 25,
                other:{
                    dad:"baba",
                    mam:"mam"
                }
            })

            let person2 = shallowReadonly({
                age: 25,
                other:{
                    dad:"baba",
                    mam:"mam"
                }
            })

            return {
                person1,
                person2            
            }
        }
    }
</script>