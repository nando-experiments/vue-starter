import Vue from 'vue'
import Router from 'vue-router'

import DefaultLayout from '@/views/Layouts/default.vue'
import HomePage from '@/views/Home/index.vue'
import AboutPage from '@/views/About/index.vue'
import Error404Page from '@/views/Errors/404.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: DefaultLayout,
    meta: {
      auth: true,
      bodyClass: 'app'
    },
    children: [
      { path: '/', name: 'home', component: HomePage, meta: { bodyClass: 'home-page' } },
      { path: '/about', name: 'about', component: AboutPage, meta: { bodyClass: 'about-page' } }
    ]
  },
  { path: '*', component: Error404Page, meta: { bodyClass: 'error404-page' } }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
