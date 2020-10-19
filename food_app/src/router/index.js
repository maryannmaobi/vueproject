import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Landingpage from '../views/landingpage.vue'
import Navbar from '../components/navbar.vue'
import Viewfood from '../views/viewfood.vue'
import Foodtable from '../views/foodtable.vue'
import FoodDetails from '../views/foodDetails.vue';
import Login from '../views/login.vue';
import Signup from '../views/signup.vue';
import Newtable from '../views/newtable.vue';
import Addedtocart from '../views/addedtocart.vue';
import Payment from '../views/payment.vue';




Vue.use(VueRouter)

  const routes = [
 
    {
      path: '/navbar',
      name: 'navbar',
      component: Navbar,
      children: [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
       
  {
    path: '/foodtable',
    name: 'foodtable',
    component: Foodtable
  },

  {
    path: '/newtable',
    name: 'newtable',
    component: Newtable
  },
      ]
    },

  {
    path: '/',
    name: 'landingpage',
    component: Landingpage,
    children: [
      {
        path: '/',
        name: 'viewfood',
        component: Viewfood
      },

      {
        path: '/payment',
        name: 'payment',
        component: Payment
      },

      {
        path: '/foodDetails/:foodid',
        name: 'foodDetails',
        component: FoodDetails
      },

      {
        path: '/addedtocart',
        name: 'addedtocart',
        component: Addedtocart
      },

    ]
  },

  {
    path: '/login',
    name: 'login',
    component: Login,
  },

  {
    path: '/signup',
    name: 'signup',
    component: Signup,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
