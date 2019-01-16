<template> 
  <div class="newsInfo-container">
    <h3 class="title">{{newsInfo.title}}</h3>
    <p class="subinfo">
      <span>发布时间:{{newsInfo.add_time|formonment}}</span>
      <span>点击{{newsInfo.click}}次</span>
    </p>

    <hr>

    <div class="content" v-html="newsInfo.content"></div>
    <comment :id="this.id"></comment>
  </div>
  
</template>

<script>
import { Toast } from 'mint-ui'
import comment from'../comment'
export default {
  data(){
    return {
      id:this.$route.params.id,
      newsInfo:{}
    }
  },
  methods:{
      getNewsInfo(){
        this.$http.get("api/getnew/" + this.id).then(result=>{
          if(result.body.status==0){
            this.newsInfo=result.body.message[0];
          } else{
            Toast("fuck")
          }
        })
      }
  },
  created(){
    this.getNewsInfo()
  },
  components:{
    comment
  }
  
}
</script>
<style lang="less">
  .newsInfo-container {
    padding:0 4px;
    .title {
      margin: 15px 0;
      color:red;
      font-size: 15px;
      text-align: center;

    }
    .subinfo {
      display:flex;
      justify-content: space-between;
      color: rgb(38, 162, 255);
      font-size: 12px;
    }
    .content {
      img {
        width:100%;
      }

    }
  }
</style>
