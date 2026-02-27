<template>
    <div class="checkboxes">
      <el-row justify="center" class="checkbox-row">
        <el-col v-for="item in checkboxList" :span="3">
          <div class="grid-content bg-purple row-pb">
            <el-checkbox  v-model="item.checked" :label="item.label" border></el-checkbox>
          </div>
        </el-col>
      </el-row>
      <el-row justify="center">
        <el-col offset="8">
          <div class="grid-content bg-purple row-pb">
            <el-checkbox v-model="allChecked" @change="handleAllCheckChange">全选</el-checkbox>
            <el-button type="primary" @click="handleConfirm">确定</el-button>
          </div>
        </el-col>
      </el-row>
  
      <el-dialog
        title="靶车控制"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="dialogVisiblefalse">
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb">
              <el-button  :loading="isloadingadvance" type="success" class="controll-button" @click="goBackward" round>前进</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb ">
              <el-button :loading="isloadingdrawback" type="primary" class="controll-button" @click="goForward" round>后退</el-button>
            </div>
          </el-col>
        </el-row>
  
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb ">
              <el-button :loading="isloadingnotification" type="danger" class="controll-button" @click="emergencyStop">紧急停止</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb">
              <el-button :loading="isloadingstop" type="warning" class="controll-button" @click="stop">停止</el-button>
            </div>
          </el-col>
        </el-row>
  
        <el-row>
          <el-col :span="12" :push="3">
            <div class="grid-content bg-purple row-pb ">
              <span style='text-align: center;line-height: 45px;'>最大轨道距离：</span>
            </div>
          </el-col>
          <el-col :span="12" :pull="3">
            <div class="grid-content bg-purple row-pb ">
              <el-input-number v-model="tracklength" :min="0"></el-input-number>
            </div>
          </el-col>
        </el-row>
  
        <el-row>
          <el-col :span="12" :push="2">
            <div class="grid-content bg-purple row-pb ">
  
              <el-input  placeholder="请输入定点距离" v-model="distance" @input="checkDistanceValue"></el-input>
            </div>
          </el-col>
          <el-col :span="12" :pull="1">
            <div class="grid-content bg-purple row-pb ">
  
              <el-button :disabled="isConfirmButtonDisabled" :loading="isloadingquicken" type="primary" class="controll-button" icon="" @click="stopAtPoint">定点停车</el-button>
            </div>
          </el-col>
        </el-row>
  
        <el-row>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb ">
              <el-button  :loading="isloadingquicken" type="primary" class="controll-button" icon="el-icon-plus" @click="speedUp" circle plain >加速</el-button>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple row-pb">
              <el-button :loading="isloadingmoderate" type="primary" class="controll-button" icon="el-icon-minus" @click="speedDown" circle plain >减速</el-button>
            </div>
          </el-col>
        </el-row>
  
        <el-progress :percentage="percentage" :color="customColorMethod()"></el-progress>
  
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisiblefalse">取 消</el-button>
          <el-button type="primary" @click="dialogVisibletrue">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </template>
  
  <script>
    import  http  from '@/utils/http'
    export default {
      data() {
        return {
          //靶机的数量
          bajinumber:30,
          //初始的靶机
          checkboxList: [],
          //选中的靶机
          SelectcheckboxList:[],
          //定点距离
          distance :'',
          //最大轨道长度
          tracklength: 90,
          //对话弹出框
          dialogVisible: false,
          //复选框是否被选中
          allChecked: false,
          //初始速度状态
          percentage: 20,
          //当的靶车方向(1:前进  2:后退 3:紧急停止)
          cardirection:-1,
          //发送的数据集合
          TransferData:{
            serialnumber:"",
            direction:"",
            speed:"",
            range:"1"
          },
          //前进加载
          isloadingadvance:false,
          //后退加载
          isloadingdrawback:false,
          //停止加载
          isloadingstop:false,
          //紧急停止加载
          isloadingnotification:false,
          //加速加载
          isloadingquicken:false,
          //减速加载
          isloadingmoderate:false,
          //定点停车按钮按input进行禁用
          isConfirmButtonDisabled: true
  
        }
      },
      computed: {
        checkedCount() {
          return this.checkboxList;
        }
      },
      mounted() {
        for(let i=1;i<this.bajinumber+1;i++ ){
          this.checkboxList.push({
            id:i,
            checked: false,
            label: `靶车编号${i}`
          })
        }
      },
      methods: {
        handleAllCheckChange(value) {
          this.checkboxList.forEach(item => {
            item.checked=value
          });
        },
        handleConfirm() {
          //把初始靶机进行选中过滤，把选中的靶机放入选中列表
          this.checkboxList.filter(item => item.checked==true).forEach(iten =>{
              this.SelectcheckboxList.push(iten.id)})
          //唤出对话框
          this.dialogVisible=true
        },
        //对话框确实逻辑
        dialogVisibletrue(){
          this.SelectcheckboxList = []
          this.checkboxList.forEach(item => {
            item.checked=false
          });
          this.dialogVisible=false
          this.TransferData.serialnumber="",
            this.TransferData.direction="",
            this.TransferData.speed="",
            this.TransferData.range="1"
        },
        //对话框取消逻辑
        dialogVisiblefalse(){
          this.SelectcheckboxList = []
          this.checkboxList.forEach(item => {
            item.checked=false
          });
          this.TransferData.serialnumber="",
            this.TransferData.direction="",
            this.TransferData.speed="",
            this.TransferData.range="1",
            this.dialogVisible=false
        },
        goForward() {
          this.isloadingdrawback=true
          //方向设置为前进 1
          this.cardirection = 1
          //发送的数据封装
          this.TransferData.serialnumber = this.SelectcheckboxList.join(",")
          this.TransferData.direction = this.cardirection
          this.TransferData.speed = (this.percentage*0.01)*32
          //实现小车前进的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingdrawback=false
          });
        },
        goBackward() { //方向设置为前进 1
          this.isloadingadvance=true
          this.cardirection = 2
          //发送的数据封装
          this.TransferData.serialnumber = this.SelectcheckboxList.join(",")
          this.TransferData.direction = this.cardirection
          this.TransferData.speed = (this.percentage*0.01)*32
          // 实现小车后退的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingadvance=false
          });
        },
        stop() {
          this.isloadingstop=true
          //发送的数据封装
          this.TransferData.serialnumber = this.SelectcheckboxList.join(",")
          this.TransferData.direction = this.cardirection
          this.TransferData.speed = 0
          // 实现小车停止的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingstop=false
          });
          //把下一次的初始速度设置成20%
          this.percentage=20
        },
        // 实现小车定点停止的逻辑
        stopAtPoint() {
  
        },
        emergencyStop() {
          this.isloadingnotification=true
          //发送的数据封装
          this.TransferData.serialnumber = this.SelectcheckboxList.join(",")
          this.TransferData.direction = 3
          this.TransferData.speed = 0
          // 实现小车紧急停止的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingnotification=false
          });
          //把下一次的初始速度设置成20%
          this.percentage=20
        },
        speedUp() {
          this.isloadingquicken=true
          this.percentage += 10;
          if (this.percentage > 100) {
            this.percentage = 100;
          }
          //-1表示设置初始速度 ""重置置初始速度
          if(this.TransferData.direction==-1){
            this.TransferData.direction=""
          }
  
          //发送的数据封装
          this.TransferData.speed = (this.percentage*0.01)*32
          // 实现小车加速的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingquicken=false
          });
  
        },
        speedDown() {
          this.isloadingmoderate=true
          this.percentage -= 10;
          if (this.percentage < 0) {
            this.percentage = 0;
          }
          //-1表示设置初始速度 ""重置置初始速度
          if(this.TransferData.direction==-1){
            this.TransferData.direction=""
          }
          //发送的数据封装
          this.TransferData.speed = (this.percentage*0.01)*32
          // 实现小车减速的逻辑
          http.post("/api/shootbache/movespeed",this.TransferData,  data=>{
            this.isloadingmoderate=false
          });
        },
        //速度颜色
        customColorMethod() {
          if (this.percentage < 40) {
            return '#909399';
          } else if (this.percentage < 80) {
            return '#1989fa';
          } else {
            return '#f56c6c';
          }
        },
        //定点停车的输入框内容判断
        checkDistanceValue(){
          const numValue = Number(this.distance)
          if (isNaN(numValue) || numValue > this.tracklength || numValue < 0) {
            this.isConfirmButtonDisabled = true
          } else {
            this.isConfirmButtonDisabled = false
          }
        }
      }
    }
  </script>
  
  <style scoped>
    .checkboxes {
      margin: 20px;
    }
    .checkbox-row {
      margin-top: 20px;
    }
    .row-pb {
      padding: 10px 0;
    }
    .controll-button{
      display:block;
      margin:0 auto
    }
  </style>
  