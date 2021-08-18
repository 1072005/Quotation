import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Form from '../views/Form.vue'
import FormType from '../views/FormType.vue'
import EditClient from '../views/EditClient.vue'
import EditProduct from '../views/EditProduct.vue'
import Review from '../views/Review.vue'
// import Mainpage from '../views/Mainpage.vue'
// import register from '../views/Register.vue'
// import  customerprofile from '../views/CustomerProfile'
// import  trackpage from '../views/Trackpage.vue'
// import  reviseproduce from '../views/Reviseproduce.vue'

Vue.use(VueRouter)
Vue.prototype.$axios = axios;

Vue.use(VueAxios, axios)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    
  },
  {
    path: '/form',
    name: 'Form',
    component: Form
  },  
  {
    path: '/formtype',
    name: 'FormType',
    component: FormType
  },
  {
    path: '/editclient',
    name: 'EditClient',
    component: EditClient
  },
  {
    path: '/editproduct',
    name: 'EditProduct',
    component: EditProduct
  },
  {
    path: '/review',
    name: 'Review',
    component: Review
  }
  //   path: '/Mainpage',
  //   name: 'Mainpage',
  //   component:Mainpage
  // },
  // {
  //   path: '/register',
  //   name: 'register',
  //   component:register
  // },
  // {
  //   path: '/customerprofile',
  //   name: 'customerprofile',
  //   component:customerprofile
  // },
  // {
  //   path: '/trackpage',
  //   name: 'trackpage',
  //   component:trackpage
  // },
  // {
  //   path: '/reviseproduce',
  //   name: 'reviseproduce',
  //   component:reviseproduce
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
