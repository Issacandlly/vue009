<template>
 <div>
    <mt-swipe :auto="3000" >
      <!-- 在组件中,使用v-for的话,一定要使用key -->
 			<mt-swipe-item v-for="(item,index) in lunbotulist" :key="item.url+index">
         <img :src="item.img" alt="">
       </mt-swipe-item>
	</mt-swipe>
  <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/newsList">
		                    <img src="../../assets/img/menu1.png">
		                    <div class="mui-media-body">新闻资讯</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/pic">
		                    <img src="../../assets/img/menu2.png">
		                    <div class="mui-media-body">图片分享</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                  <router-link to="/home/goods">
		                    <img src="../../assets/img/menu3.png">
		                    <div class="mui-media-body">商品购买</div>
                  </router-link>
                </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/img/menu4.png">
		                    <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/img/menu5.png">
		                    <div class="mui-media-body">视频教程</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                    <img src="../../assets/img/menu6.png">
		                    <div class="mui-media-body">联系我们</div></a></li>
		        </ul>
 </div>
  
</template>
<script>
import { Toast } from 'mint-ui';
export default {
  data(){
    return {
      lunbotulist:[]
    }
  },
  methods:{
    getHomeContainer(){
      //获取轮播图数据
      this.$http.get("api/getlunbo").then(result=>{
        if(result.body.status==0){
          //console.log(result.body);
          this.lunbotulist=result.body.message;
          
        } else{
          Toast('请求出错')
        }
      })
    }
  },
  created(){
    this.getHomeContainer()
  }

}
</script>
<style lang="less" scoped>
     .mint-swipe{
       height:200px;
       .mint-swipe-item{
        //  &:nth-child(1){
        //    background-color: red;
        //  }
        //   &:nth-child(2){
        //    background-color: skyblue;
        //  }
        //   &:nth-child(3){
        //    background-color: yellow;
        //  }
         img{
           height:100%;
           width:100%;
         }
       }
     }
     .mui-grid-view.mui-grid-9 {
       background-color: #fff;
       .mui-table-view-cell{
         border-right:none;
         border-bottom:none;
         img {
           height: 60px;
           width: 60px;
         }
          .mui-media-body {
            font-size: 12px;
          } 
       }
     }
</style>
