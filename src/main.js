//入口文件
import Vue from 'vue'
//import MintUI from 'mint-ui' 
 

//导入app组件
import app from './App';
//按需导入mint-ui的的组件
import { Header } from 'mint-ui';
import "mint-ui/lib/style.css";
//导入mui
import './lib/mui/css/mui.css';
import './lib/mui/css/icons-extra.css';


 Vue.component(Header.name, Header);


//创建vue实例
let vm = new Vue({
  el:'#app',
  render:c=>c(app)
})