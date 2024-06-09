import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/SignupView.vue'
import Login from '@/components/Login.vue'
import resetPassword from '@/components/resetPassword.vue'
import forgotPassword from '@/components/forgotPassword.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },

    {
      path: '/login',
      name: 'login',
      component: Login
    },

    {
      path: '/resetpassword',
      name: 'resetpassword',
      component: resetPassword
    },

    {
      path: '/forgotpassword',
      name: 'forgotpassword',
      component: forgotPassword
    },

    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
