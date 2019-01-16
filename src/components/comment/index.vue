<template>
  <div class="cmt-container">
    <h1 class="cmt-title">评论列表</h1>
    <textarea class="cmt-area" placeholder="多做事,少BB(最多输入120个字)" maxlength="120" v-model="msg"></textarea>
    <mt-button type="primary" size="large" @click="uploadCmt">发表评论</mt-button>
    
    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,i) in commentInfo" :key="item.i">
        <div class="cmt-title">
          第{{i+1}}楼 用户:{{item.user_name}} 发表时间:{{item.add_time|formonment}} 
        </div>
        <div class="cmt-cont">
          {{item.content}}
        </div>
      </div>
    </div>
    <mt-button type="danger" size="large" plain @click="loadMore">加载更多</mt-button>
  </div>
</template>
<script>
export default {
  data(){
    return {
      commentInfo:[],
      pageIndex:1,
      msg:''
    }
  },
  methods:{
    getCommentInfo(){
      this.$http.get("api/getcomments/"+this.id +"?pageindex="+this.pageIndex).then(result=>{
        if(result.body.status==0){
          //将两个数组拼接,+=是无效
          this.commentInfo=this.commentInfo.concat(result.body.message);    
        } else{
          console.log("hello world")
        }
      })
    },
    loadMore(){
      this.pageIndex++;
      this.getCommentInfo()
    },
    uploadCmt(){
      if(this.msg.trim() !=''){
        this.$http.post("api/postcomment/"+this.id,{content:this.msg},{emulateJSON:true}).then(result=>{
          if(result.body.status==0){
            let localmsg = {user_name:"匿名用户",add_time:Date.now(),content:this.msg};
            this.commentInfo.unshift(localmsg)
            this.getCommentInfo();
            this.msg=""
          }
        })
      }
      //this.commentInfo.unshift(this.msg);
    }
  },
  created(){
    this.getCommentInfo()
  },
  props:["id"]
}
</script>
<style lang="less" scoped>
  .cmt-container{
    .cmt-title {
      font-size:16px;

    }
    .cmt-area {
      font-size:13px;
      margin-bottom:0;
    }
    .cmt-list {
      margin:5px 0;
      .cmt-item {
        overflow: hidden;
        .cmt-title {
          font-size: 13px;
          background-color: rgb(204,204,204)
        }
      }
    }
  }
</style>

