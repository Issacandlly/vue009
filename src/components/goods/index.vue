<template>
  <div class="goodsList-container">
    <div class="goodsInfo" v-for="item in goods" :key="item.id" @click="getGoodsInfo(item.id)">
      <div class="goodsImg">
        <img :src="item.img_url">
        <h3>{{item.title}}</h3>
        <p class="goodsPrice">
          <span class="priceNow">{{item.sell_price}}</span> &nbsp;&nbsp;&nbsp;&nbsp;
          <span class="priceMarket">{{item.market_price}}</span>
        </p>
        <p class="goodsStatus">
          <span >热卖中</span>
          <span>{{item.stock_quantity}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      pageIndex:1,
      goods:[]
    }
  },
  methods:{
    getGoods(){
      this.$http.get("api/getgoods"+"?pageindex="+ this.pageIndex).then(result=>{
        if(result.body.status==0){
          //console.log(result.body.message)
          this.goods=result.body.message
        }
      })
    },
    getGoodsInfo(id){
      this.$router.push('/home/goods/goodsInfo.vue/'+id)
    }
  },
  created(){
    this.getGoods()
  }
}
</script>
<style lang="less" scoped>
  .goodsList-container{
    display: flex;
    flex-wrap: wrap;
    justify-content:space-between;
    padding: 7px;
    .goodsInfo{
      min-height: 293px;
      width: 49%;
      border: 1px solid #ccc;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .goodsImg{
        img{
        width: 100%;
        }
        h3{
          min-height: 38.4px;
          font-size: 13px;
        }
       .goodsPrice{
        // display:flex;
         padding:10px;
         background-color: #eee;
         margin: 0;
        //  span: first-child{
        //    color:red;
        //  }
        .priceNow{
          color: red;
          font-size: 16px;
          font-weight: 700;
          
        }
        .priceMarket{
          text-decoration:line-through;
          font-size: 12px;
          margin-left:10px;
        }
       }
       .goodsStatus{
         display:flex;
         justify-content:space-between;
         padding:8px;
         background-color: #eee;
       }
      }
    }
  }
</style>

