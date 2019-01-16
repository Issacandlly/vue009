<template>
  <div>
    <h1>haha </h1>
  </div>
</template>
<script>
export default {
  data(){
    return{
      goodsDesc:[],
      id:this.$route.params.id
    }
  },
  methods:{
    getDesc(){
      this.$http.get("api/goods/getdesc/"+this.id).then(result=>{
        if(result.body.status==0){
          this.goodsDesc=result.body.message
        }
      })
    }
  },
  created(){
    this.getDesc()
  }
}
</script>