<template>
    <div style="background-color: aquamarine;padding: 10px;">
        <h2>异步组件加载</h2>
        <h3>{{ sum }}</h3>
    </div>
</template>

<script>
import { ref } from 'vue';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        setup(){
            let sum = ref(0)
            return new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve(sum)
                },1000)
            })
        }
    }
</script>

<style>
    .dialog{
        background-color: blueviolet;
        width: 200px;
        height: 300px;
        padding: 10px;
    }
</style>