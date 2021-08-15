import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Mainpage from '../views/Mainpage.vue'
import register from '../views/Register.vue'
import  customerprofile from '../views/CustomerProfile'
import  trackpage from '../views/Trackpage.vue'
import  reviseproduce from '../views/Reviseproduce.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Mainpage',
    name: 'Mainpage',
    component:Mainpage
  },
  {
    path: '/register',
    name: 'register',
    component:register
  },
  {
    path: '/customerprofile',
    name: 'customerprofile',
    component:customerprofile
  },
  {
    path: '/trackpage',
    name: 'trackpage',
    component:trackpage
  },
  {
    path: '/reviseproduce',
    name: 'reviseproduce',
    component:reviseproduce
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
