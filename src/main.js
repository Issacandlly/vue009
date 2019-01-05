//入口文件
import Vue from 'vue'
//import MintUI from 'mint-ui'
//导入路由组件
import VueRouter from 'vue-router'
//导入vue-resource
import VueResource from 'vue-resource'

//安装路由
Vue.use( VueRouter)
//安装vue-resource
Vue.use(VueResource)
//导入路由模块
import router from './router'

//导入app组件
import app from './App';

//按需导入mint-ui的的组件
import {Header, Swipe, SwipeItem,} from 'mint-ui';
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);


import "mint-ui/lib/style.css";
//导入mui
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';





//创建vue实例
let vm = new Vue({
  el:'#app',
  methods:{

  },
  render:c=>c(app),
  router
})