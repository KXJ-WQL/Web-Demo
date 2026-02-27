<template>
  <div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <MyHeader @addtodo="addtodo"/>
      <MyList :todos="todos" :checktodo="checktodo" :deletetodo="deletetodo"/>
      <MyFooter :todos="todos" :Checkalldoto="Checkalldoto" :cleandoto="cleandoto"/>
    </div>
  </div>
</div>

</template>

<script>
//引入组件
import MyHeader from "./components/MyHeader"
import MyList from "./components/MyList"
import MyFooter from "./components/MyFooter"

export default {
  name: 'App',
  //列表数据
  data(){
            return{
                //获取localStorage中的数据
                todos: JSON.parse(localStorage.getItem("todos")) || []
            }
        },
  methods:{
    //添加一个todoObj
    addtodo(todoObj){
      this.todos.unshift(todoObj)
    },
    //勾选or取消勾选todo
    checktodo(id){
      //对指定id的todo进行取反
      this.todos.forEach((todo)=>{
        if(todo.id === id){
          todo.done = !todo.done
        }
      })
    },
    //删除对应的数据
    deletetodo(id){
      //将删除的元素过滤掉
      this.todos = this.todos.filter((todo)=>{
          return todo.id!=id;
      })
    },
    //是否勾选全部数据
    Checkalldoto(isdone){
      this.todos.forEach((todo)=>{
        todo.done = isdone
      })
    },
    //清除全部已完成的任务
    cleandoto(){
      this.todos = this.todos.filter((todo)=>{
          return !todo.done;
      })
    },
    //更新一个todo数据
    updatatodo(id,title){
      this.todos.forEach((todo)=>{
        if(todo.id==id){
          todo.title=title
        }
      })
    }
  },
  mounted(){
    this.$bus.$on('updatatodo',this.updatatodo)
  },
  watch:{
    todos:{
      deep:true,//开启深度监视
      handler(value){
        localStorage.setItem("todos",JSON.stringify(value))
      }
    }
  },
  //注册组件
  components: {
    MyHeader,
    MyList,
    MyFooter
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-edit{
  color: #fff;
  background-color:#1686e8;
  border: 1px solid #63adee;
  margin-right: 4px;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}


</style>
