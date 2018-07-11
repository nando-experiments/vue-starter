import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import axios from 'axios'
import vbclass from 'vue-body-class'

import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import { API_URL_BASE, AUTH_TOKEN_NAME } from '@/config'

import '@/registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const isProduction = process.env.NODE_ENV === 'production'

// Global components
window._ = require('lodash')
window.axios = axios

axios.defaults.baseURL = (isProduction) ? API_URL_BASE : 'http://dev.api.example.com/v1'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem(AUTH_TOKEN_NAME)}`

Vue.use(BootstrapVue)
Vue.use(vbclass, router)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
