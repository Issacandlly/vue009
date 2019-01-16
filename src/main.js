//入口文件
import Vue from 'vue'
import MintUI from 'mint-ui'
//导入路由组件
import VueRouter from 'vue-router'
//导入vue-resource
import VueResource from 'vue-resource'
//导入moment
import moment from 'moment'

Vue.filter("formonment",function(datastr,partten="YYYY-MM-DD HH:mm"){
  return moment(datastr).format(partten)
})
//安装路由
Vue.use( VueRouter)
//安装vue-resource
Vue.use(VueResource)
Vue.use(MintUI)
//配置根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/'
//导入路由模块
import router from './router'

//导入app组件
import app from './App';
//Vue.http.options.root = '/http://www.lovegf.cn:8899'
//按需导入mint-ui的的组件
// import {Header, Swipe, SwipeItem,Button, Lazyload } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Header.name, Header);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);


import "mint-ui/lib/style.css";
//导入mui
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';
import VuePreview from 'vue2-preview';
Vue.use(VuePreview);





//创建vue实例
let vm = new Vue({
  el:'#app',
  methods:{

  },
  render:c=>c(app),
  router
})