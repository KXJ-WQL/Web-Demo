<template>
        <li>
          <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span v-show="!todo.isEdit">{{todo.title}}</span>
            <input v-show="todo.isEdit" ref="inputTitle" type="text" :value="todo.title" @blur="handleblur(todo,$event)">
          </label>
          <button class="btn btn-danger" @click="handledel(todo.id)">删除</button>
          <button v-show="!todo.isEdit" class="btn btn-edit" @click="handledit(todo)">编辑</button>
        </li>
</template>

<script>
    export default{
        name:"MyItem",
        //通过props获取父组件的值
        props:['todo','checktodo','deletetodo'],
        //勾选处理
        methods:{
          handleCheck(id){
            //通知APP组件将对应id对象中的done值取反
            this.checktodo(id)
          },
          handledel(id){
            //通知APP组件将对应的id删除
            this.deletetodo(id)
          },
          //编辑
          handledit(todo){
            //判断doto是否有isEdit属性
            if(todo.hasOwnProperty("isEdit")){
              this.todo.isEdit=true
            }else{
              this.$set(todo,'isEdit',true)
            }
            //自动获取input的焦点
            //this.$refs.inputTitle.focus()
            //定时器解决
            // setTimeout(()=>{
            //   this.$refs.inputTitle.focus()
            // },200)
            this.$nextTick(function(){
              this.$refs.inputTitle.focus()
            })
          },
          //输入框失去焦点触发方法
          handleblur(todo,event){
            todo.isEdit=false
            //判断内容是否为空
            if(!event.target.value.trim()) return alert("值不能为空！")
            //触发全局的updatatodo事件传递参数
            this.$bus.$emit("updatatodo",todo.id,event.target.value)
            
          }
        }
      }
</script>

<style scoped>

/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover button{
  display: block;
}

li:hover {
  background-color: #ddd;
}
</style>