import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
//引入字体文件
import './assets/font/iconfont.css'
//引入全局样式文件
import './assets/css/global.less'
import SocketService from './utils/socket_service'

// 对服务端进行websocket的连接
SocketService.Instance.connect()
Vue.prototype.$socket = SocketService.Instance

axios.defaults.baseURL = 'http://127.0.0.1:8888/api'
Vue.prototype.$http = axios

// 将全局的echarts对象挂载到Vue的原型对象上
Vue.prototype.$echarts = window.echarts

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
