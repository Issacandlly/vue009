<template>
<div>
 <ul class="mui-table-view" >
    <li class="mui-table-view-cell mui-media" v-for="item in newsList" :key="item.id">
        <a href="javascript:;">
            <img class="mui-media-object mui-pull-left" :src="item.img_url">
            <div class="mui-media-body">
                <h1>{{item.title}}</h1>
                <p class='mui-ellipsis'>
                  <span>创建时间:{{item.add_time|formonment}}</span>
                  <span>点击次数:{{item.click}}</span>
                </p>
            </div>
        </a>
    </li>
  </ul>
</div>
</template>
<script>
export default {
  data(){
    return {
      newsList:[]
    }
  },
  methods:{
    getNewsList(){
      this.$http.get("http://www.lovegf.cn:8899/api/getnewslist").then(result=>{
        if(result.body.status==0){
        this.newsList=result.body.message;
        } else{
           //Toast("how are you")
           console.log("nihao ")
        }
      })
    }
  },
  created(){
      this.getNewsList()
    }
}
</script>
<style lang="less" scoped>
  .mui-table-view{
    .mui-media-body{
      h1 {
        font-size: 16px;
      }
      .mui-ellipsis{
        display:flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgb(135, 153, 235);
      }
    }
  }
</style>
