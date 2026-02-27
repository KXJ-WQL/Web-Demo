<template>
 <div class="todo-footer" v-show="alltodos">
        <label>
          <input type="checkbox" :checked="istodos" @change="checkall"/>
        </label>
        <span>
          <span>已完成{{donetodal}}</span> / 全部{{alltodos}}
        </span>
        <button class="btn btn-danger" @click="cleanchecktodo">清除已完成任务</button>
      </div>
    
</template>

<script>

    export default{
        name:"MyFooter",
        props:['todos','Checkalldoto','cleandoto'],
        computed:{
          //已完成统计
          donetodal(){
            //reduce函数做统计
            const a= this.todos.reduce((pre,con)=>{
              return pre+(con.done?1:0)
            },0)
            return a
          },
          //全部任务统计
          alltodos(){
            return this.todos.length
          },
          //是否全部勾选
          istodos(){
            return this.alltodos === this.donetodal && this.alltodos>0
          },
        },
        methods:{
          //勾选全部
          checkall(e){
            this.Checkalldoto(e.target.checked)
          },
          //清除已勾选的
          cleanchecktodo(){
            this.cleandoto()
          }
        }
    }

</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}


</style>