import VueRouter from 'vue-router'
import home from '../components/home'
import member from '../components/member'
import shopcar from '../components/shopcar'
import search from '../components/search'


let router = new VueRouter({
  routes:[
      {path:'/',redirect:'/home'},
     {path:'/home',component:home},
     {path:'/member',component:member},
     {path:'/shopcar',component:shopcar},
     {path:'/search',component:search}
  ],
  linkActiveClass:'mui-active',
})

export default router