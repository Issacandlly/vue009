<template>
  <div class="image-container">
    <h1>{{picInfo.title}}</h1>
    <p class="into-title">
      <span class="create-time">
        发表时间:{{picInfo.add_time|formonment}}
      </span>
      <span class="click-time">
        点击:{{picInfo.click}}次
      </span>
    </p>
    <hr/>
    <div class="content">
       <!-- <div style="height: 1000px; background-color: pink;"></div> -->
    <vue-preview
      :list="list"
      :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
      :previewBoxStyle="{border: '1px solid #eee'}"
      :tapToClose="true"
    />
      {{picInfo.content}}
    </div>
    <!-- <com :id="id"></com>  -->
    <comment :id="id"></comment>
  </div>
  
</template>
<script>
import comment from '../../comment/index.vue'
export default {
  data(){
    return{
      picInfo:{},
      id:this.$route.params.id,
      //imgList:[],
      list: [
        // {
        //   src: '',
        //   w: 600,
        //   h: 600
        // },
        // {
        //   src: '',
        //   w: 1200,
        //   h: 900
        // }
      ]
    }
  },
  components:{
    comment
  },
  methods:{
    getImageInfo(){
      this.$http.get("api/getimageInfo/"+this.id).then(result=>{
        if(result.body.status==0){
          this.picInfo=result.body.message[0]
          //console.log(this.picInfo)
        } else{
          console.log("shit")
        }
      })
    },
    getThumbImage(){
      this.$http.get("api/getthumimages/"+this.id).then(result=>{
        if(result.body.status==0){
          this.list= result.body.message;
        //遍历list将宽高追加进去
        //this.list.forEach((item,i,list)=>{ 
          //  for(let i=0;i<this.list.length;i++){
          //   this.list[i].w=600;
          //   this.list[i].h=400;
          // }
          this.list.forEach((item,key,list)=>{
            item.w=600;
            item.h=400;
          })
          

        
          // this.imgList.forEach((item,index,imgList)=>{
          //   this.list.src=item.src
          // })
        //   this.list[0].src=this.imgList[0].src
         }
      })
    },
    // getMinPic(){
    //   this.imgList.forEach (item ,i)=>{

    //   }
    // }
  },
  created(){
    this.getImageInfo();
    this.getThumbImage();
    //this.getMinPic();
  }
}
</script>
<style lang="less" scoped>
  .image-container{
    padding:0 10px;
    h1{
      color: rgb(38, 162, 255);
      font-size: 14px;
      text-align: center;
      margin:20px auto;
    }
    .into-title{
      font-size:12px; 
      display: flex;
      justify-content: space-between;
    }
    .content{
      font-size:12px;
      padding:5px;
      line-height: 30px;
    }  
    
  }

</style>
