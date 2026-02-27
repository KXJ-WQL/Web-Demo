<template>
    <div style="background-color: aquamarine;padding: 10px;">
        <button @click="isShow = !isShow">显示弹窗</button>
        <Teleport to="#myteleport">
            <div v-if="isShow" class="dialog">
                <h3>弹窗</h3>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <h4>一些内容</h4>
                <button @click="isShow = !isShow">关闭弹窗</button>
            </div>
        </Teleport>
    </div>
</template>

<script>
import { reactive,ref,toRaw,markRaw } from 'vue';

    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },

        setup(){
          
            let isShow = ref(false)
            return {
                isShow
            }
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