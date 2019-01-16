<template>
  <div class="scroll-tap">
    <!-- 顶部图片分类 -->
    <div class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
      <div class="mui-scroll">
        <span :class="['mui-control-item',item.id==0?'mui-active':'' ]" v-for="item in picCategory" :key="item.id" @click="getImages(item.id)">
            {{item.title}}
        </span>
      </div>
     </div>
     <!-- 中间图片内容 -->
    <ul class="image-list">
      <router-link v-for="item in imageList" :key="item.id" tag="li" :to="'/home/pic/picInfo/'+item.id">
           <img v-lazy="item.img_url">
           <div class="image-info">
            <div class="image-title">{{item.title}}</div>
            <div class="image-zhaiyao">{{item.zhaiyao}}</div>
        </div>
      </router-link >
    </ul>
  </div>
    
</template>
<script>
import mui from"../../lib/mui/js/mui.js";
export default {
  data(){
    return {
      picCategory:[],
      imageList:[]
      //id:this.$route.params.id
    }
  },
  methods:{
    getCategory(){
      this.$http.get("api/getimgcategory").then(result=>{
        if(result.body.status==0){
          result.body.message.unshift({title:"全部",id:0});
          this.picCategory = result.body.message;
          //result.body.message
          //console.log(this.picCategory)
        } else{
          alert("shit")
        }
      })
    },
    getImages(cateId){
      this.$http.get("api/getimages/"+cateId).then(result=>{
        if(result.body.status==0){
          //console.log(result.body)
          this.imageList=result.body.message
          console.log(this.imageList)
        } else{
          console.log("nothanks")
        }
      })
    }
  },
  created(){
    this.getCategory();
    this.getImages(0)
  },
  mounted(){
    mui('.mui-scroll-wrapper').scroll({
	deceleration: 0.01 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
  })
  }
}
</script>
<style lang="less" scoped>
  .scroll-tap{
    .image-list {
      //padding:none;
      margin:0;
      padding: 10px;
      padding-bottom:0;
     
      li{
        // display: flex;
        // flex-direction: row;
        //margin:auto;
        text-align: center;
        position:relative;
        margin-bottom:10px ;
        //padding-bottom:none;
        background-color: #ccc;
        list-style: none;
        img{
          vertical-align: middle;
          width:100%;
        }
        // .image-title{
        //   display: inline-block;
        // }
        // .image-zhaiyao{
        //   display: inline-block
        // }
      }
      //  li:first-child{
      //   padding-top:none
      // }
      img[lazy=loading] {
        width: 40px;
        height:300px;
        //text-align: center;
        margin: auto;
      }
      //
    }
  }
   .image-info{
        position:absolute;
        text-align: left;
        bottom:0;
        background: rgba(0,0,0,.4);
        //box-sizing: border-box;
        color:white;
        max-height:84px;
        .image-title{
          font-size:14px;
        }
        .image-zhaiyao{
          font-size:13px;
        }
      }
  
</style>

