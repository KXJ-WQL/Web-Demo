<template>
    <div class="item" >
      <div :style="fromWH">
        <span class="title-style">气象仪监测数据</span>
        <div class="data-content">
            <div class="datatext">
                <i class="el-icon-odometer">温度: </i>
            </div>
            <div class="datatext">
                <i class="el-icon-stopwatch">湿度：</i>
            </div>
            <div class="datatext">
                <i class="el-icon-wind-power">风向：</i>
            </div>
            <div class="datatext">
                <i class="el-icon-finished">风速：</i>
            </div>
            <div class="datatext">
                <i class="el-icon-light-rain">降雨量：</i>
            </div>
            <div class="datatext">
                <i class="el-icon-sunny">光照度：</i>
            </div>
            <div class="datatext">
                <i class="el-icon-sunset">气压：</i>
            </div>
            
        </div>
    </div>
    </div>
</template>

<script>
 export default {
    name: "meteorologicalDataFrame",
    props:['widthAndheight'],
    data(){
        return {
            //表单容器宽高
            fromWH:{
                width:(parseInt(this.widthAndheight.width)*0.6)+"px",
                height:(parseInt(this.widthAndheight.height)*0.6)+"px"
            }
        }
    },
    mounted(){
        console.log(this.fromWH.width,this.fromWH.height)
    }

  }
</script>

<style>

  .item {
    --bRadius: 10px;
  }

  .title-style{
    font-size: 20px;
    letter-spacing: 1px;
  }

  .datatext{
    text-align: left;
    font-size: 17px;
    margin-bottom: 15px;
  }

  .data-content{
    margin-top:10px ;
    margin-left: 20%;
    padding-left: 10%;
    width: 60%;
    height: 70%;
  }

  .item > div {
    margin: 0 auto;
    margin-top: 8%;
    padding: 10px;
    position: relative;
    border: 2px solid rgb(179, 191, 231);
    border-radius: var(--bRadius);
    transition: all .3s;
    opacity: 0.7;
    text-align: center;
    background-color: #eee;
  }

  .item > div::before,
  .item > div::after {
    content: "";
    position: absolute;
    top: -10px;
    left: -10px;
    right: -10px;
    bottom: -10px;
    border-radius: var(--bRadius);
    border: 2px solid rgb(17, 36, 100);
    transition: all .5s;
    animation: clippath 3s infinite linear;
  }

  .item > div::after {
    animation: clippath 3s infinite -1.5s linear;
  }

  @keyframes clippath {
    0%, 100% { clip-path: inset(0 0 98% 0); }
    25% { clip-path: inset(0 98% 0 0); }
    50% { clip-path: inset(98% 0 0 0); }
    75% { clip-path: inset(0 0 0 98%); }
  }
</style>












