<template>
      <ul class="todo-main">
         <!-- 循环遍历子组件，并向子组件中传递todoObj值 -->
         <MyItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj" :checktodo="checktodo" :deletetodo="deletetodo"/>
    
      </ul>

</template>

<script>
    //引入Item组件到List中
    import MyItem from './MyItem.vue';

    export default{
        name:"MyList",
        components:{MyItem},
        props:['todos','checktodo','deletetodo']
}

</script>

<style>

/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}

</style>