<template>
  <div class="main-container" :style="containerHW">
    <meteorologicaleffects :widthAndheight ="containerHW"></meteorologicaleffects>
    <meteorologicaldataframe :widthAndheight ="containerHW"></meteorologicaldataframe>
    <div class="wrapper-inner-tab-backgrounds-second"><div class="sim-button button10"><span>更新监测数据</span></div></div>

  </div>

</template>

<script>
import meteorologicaleffects from "@/components/meteorological/meteorologicaleffects/index.vue"
import meteorologicaldataframe from "@/components/meteorological/meteorologicaldataframe/index.vue"
export default {
  components:{
    meteorologicaleffects,
    meteorologicaldataframe
  },
  data(){
    return{
     //容器的宽高
     containerHW:{
      width:0,
      height:0
     }
    }
  },
  created(){
   //获取屏幕的宽高并获取比例
    this.containerHW.width = (window.innerWidth*0.6)+"px"
    this.containerHW.height = (window.innerHeight*0.7)+"px"
  },
  mounted(){

    
  },
  methods:{
    
    
  }
}
</script>

<style>
  .main-container{
    position: relative;
    border: 1px solid hsl(229, 53%, 43%);
    margin: 0 auto;
    margin-top: 100px;
    padding: 1px;
  }
  .wrapper-inner-tab-backgrounds-second{
	margin-left: 40%;
  margin-top: 2%;
	height: 50px;
	width: 150px;
}
.sim-button{
	line-height: 50px;
	height: 50px;
	text-align: center;
	width: 99%;
	cursor: pointer;
}
.button10{
	color: rgba(255,255,255,1);
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
	position: relative;	
}
.button10 a{
	color: rgba(51,51,51,1);
	text-decoration: none;
	display: block;
}
.button10 span{
	z-index: 2;	
	display: block;
	position: absolute;
	width: 100%;
	height: 100%;	
}
.button10::before{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
	border: 1px solid rgba(255,255,255,0.5);
	background-color: rgba(255,255,255,0.25);
}
.button10::after{
	content: '';
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1;
	-webkit-transition: all 0.5s;
	-moz-transition: all 0.5s;
	-o-transition: all 0.5s;
	transition: all 0.5s;
	border: 1px solid rgba(255,255,255,0.5);
	background-color: rgba(255,255,255,0.25);

}
.button10:hover::before{
    -webkit-transform: rotate(-45deg);
       -moz-transform: rotate(-45deg);
        -ms-transform: rotate(-45deg);
         -o-transform: rotate(-45deg);
            transform: rotate(-45deg);
			background-color: rgba(255,255,255,0);
}
.button10:hover::after{
    -webkit-transform: rotate(45deg);
       -moz-transform: rotate(45deg);
        -ms-transform: rotate(45deg);
         -o-transform: rotate(45deg);
            transform: rotate(45deg);
			background-color: rgba(255,255,255,0);
}
</style>
