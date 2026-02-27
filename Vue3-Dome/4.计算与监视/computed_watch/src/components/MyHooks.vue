<template>
    <h2>当前点击时鼠标的坐标为：x:{{ point.x }} y:{{ point.y }}</h2>
</template>

<script>
    import { onBeforeUnmount, onMounted, reactive } from 'vue';
    import multiplexs from '../hooks/multiplexs';

    export default{
        name:'Demo',
        setup(){

            let point = multiplexs()

            // let point = reactive({
            //     x:0,
            //     y:0
            // })
            
            // function savePoint(event){
            //     point.x = event.pageX
            //     point.y = event.pageY
            //     console.log(event.pageX,event.pageY)
            // }

            // onMounted(()=>{
            //     window.addEventListener('click',savePoint)
            // })

            // onBeforeUnmount(()=>{
            //     window.removeEventListener('click',savePoint)
            // })

            return {point}
        }
    }
</script>