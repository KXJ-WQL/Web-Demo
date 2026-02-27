<template>
    <div id="app">
        <div id="pixi-container" ref="page_canvas"></div>
    </div>
</template>

<script>
//导入pixi.js 
import * as PIXI from 'pixi.js'
import { GodrayFilter } from 'pixi-filters'

export default {
  name:"meteorologicalEffects",
  props:['widthAndheight'],
  data(){
    return{
      //PIXI渲染器
      pixiapp:null,
      //渲染引擎宽高
      pixiappWH:{
        width:parseInt(this.widthAndheight.width),
        height:parseInt(this.widthAndheight.height)
      }
    }
  },
  mounted(){
    //初始化PIXI
    this.createStickerCanvas()
    
  },
  methods:{
    //创建PIXI渲染器
    createStickerCanvas(){
      //创建PIXI渲染引擎
      this.pixiapp = new PIXI.Application({
        width : this.pixiappWH.width,//指定引擎画布宽度
        height : this.pixiappWH.height,//指定引擎画布高度
        backgroundColor : 0xc3a072, //指定引擎画布背景颜色
        resolution : 1 //指定像素分辨率 window.devicePixelRatio获取当前设备的像素比例，如果没有就为1:1
      })
      //将PIXI渲染器放置到页面的指定元素中
      this.$refs.page_canvas.appendChild(this.pixiapp.view)

      //背景
      this.drawBackgroup()

      //下雨
      // this.drawTextureBackground()

    },

    //绘制背景
    drawBackgroup(){
      //加载背景图片
      const raindropBackgroupImage = require('@/assets/cleardaybackgroup.png')
      //创建背景纹理纹理
      const raindropTexture = PIXI.Texture.from(raindropBackgroupImage)
      //创建精灵
      const spriteBackgroup = new PIXI.Sprite(raindropTexture)
      spriteBackgroup.width = this.pixiapp.screen.width//设置精灵宽
      spriteBackgroup.height = this.pixiapp.screen.height//设置精灵高
      spriteBackgroup.alpha =0.7//透明度
      //创建滤镜
      const godrayFilter =  new GodrayFilter({
        angle: 15,        // 光晕角度
        lacunarity: 2.6,  // 光晕的形状
        gain: 0.7,        // 光晕增益
        time: 0,         // 光晕动画时间
        alpha:0.8
      })

      //添加滤镜给精灵
      spriteBackgroup.filters = [godrayFilter]
      //添加精灵到渲染引擎
      this.pixiapp.stage.addChild(spriteBackgroup)
      //在PixiJS的渲染循环中更新滤镜的时间属性以实现动画
      this.pixiapp.ticker.add((delta) => {
        //更新滤镜的时间属性，控制光晕动画
        godrayFilter.time += delta * 0.01; // 调整增加的速度以控制动画速度
      });
    },

    //绘制雨滴下落
    drawTextureBackground(){
      //雨滴粒子容器
      const rainContainer = new PIXI.Container();
      this.pixiapp.stage.addChild(rainContainer)
      //加载雨滴图片
      const raindropimage = require('@/assets/raindrop.png')
      //雨滴纹理
      const raindropTexture = PIXI.Texture.from(raindropimage)
      
      //创建多个雨滴粒子
      for(let i =0;i< 100;i++){
        //创建精灵
        const raindropSprite = new PIXI.Sprite(raindropTexture)
        raindropSprite.alpha = 0.5//设置透明度
        raindropSprite.anchor.set(0.5)//设置锚点位置
        raindropSprite.scale.set( 0.1 + Math.random() * 0.4,  0.1 + Math.random() * 0.4);
        raindropSprite.x = Math.random() * this.pixiapp.screen.width;//出现的x坐标
        raindropSprite.y = Math.random() * this.pixiapp.screen.height;//出现的y坐标
        raindropSprite.velocityY = 2 + Math.random() * 10; // 设置雨滴下落速度(这个velocityY手动加入)
        rainContainer.addChild(raindropSprite)
      }
      // 渲染循环
      this.pixiapp.ticker.add(() => {
        for (let i = 0; i < rainContainer.children.length; i++) {
          const raindrop = rainContainer.children[i];
          raindrop.y += raindrop.velocityY;//下落过程
          // 如果雨滴超出屏幕底部，重新定位到屏幕顶部
          if (raindrop.y > this.pixiapp.screen.height*(0.5 + Math.random() * 0.9)) {
            raindrop.y = 0;
          }
        }
      });
    }
  }
}
</script>

<style>
  /* #app {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  } */

  #pixi-container {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%; 
  }
</style>