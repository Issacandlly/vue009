import VueRouter from 'vue-router'
import home from '../components/home'
import member from '../components/member'
import shopcar from '../components/shopcar'
import search from '../components/search'
import newsList from '../components/newsList'
import newsInfo from '../components/newsList/newsInfo.vue'
import pic from '../components/pic' 
import picInfo from '../components/pic/picInfo'
import goods from '../components/goods'
import goodsInfo from '../components/goods/goodsInfo.vue'





let router = new VueRouter({
  routes:[
    {path:'/',redirect:'/home'},
    {path:'/home',component:home},
    {path:'/member',component:member},
    {path:'/shopcar',component:shopcar},
    {path:'/search',component:search},
    {path:'/home/newsList',component:newsList},
    {path:'/home/newsList/newsInfo/:id',component:newsInfo},
    {path:'/home/pic',component:pic},
    {path:'/home/pic/picInfo/:id',component:picInfo},
    {path:'/home/goods',component:goods},
    {path:'/home/goods/goodsInfo.vue/:id',component:goodsInfo}
  ],
  linkActiveClass:'mui-active',
})

export default router