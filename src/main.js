import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import { alertView } from '@/assets/js/alert'
import './permission'


Vue.use(ElementUI);

Vue.prototype.$axios = axios
Vue.prototype.$qs = qs
Vue.prototype.alertView = alertView

Vue.prototype.HOME ='/api'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
