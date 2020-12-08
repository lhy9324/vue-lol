import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap.min.css'
// 使用App组件, 作为根组件渲染 index.html
// Vue.prototype.$axios = axios
// axios.defaults.baseURL = 'http://localhost:3000/heroes'
import axios from 'axios'
Vue.prototype.$axios = axios
axios.defaults.baseURL = `http://localhost:3000/heroes`
new Vue({
  // 指定容器
  el: '#app',
  router,
  // 渲染根组件
  render: h => h(App),
})
