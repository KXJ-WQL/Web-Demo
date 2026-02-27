<template>
    <h2>父组件传递的信息{{ name }}</h2>
</template>

<script>
    import { inject } from 'vue';

    export default {
        name: 'HelloWorld',

        props: {
            msg: String
        },

        setup(){
           const name = inject('name','无数据')

            return {
                name
            }
        }
    }
</script>