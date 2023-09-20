import { createRouter, createWebHistory } from 'vue-router';
import Signup from '../components/Signup.vue';
import Login from '../components/Login.vue';
import Home from "../components/Home.vue";
const routes = [
  {
    path: '/',
    name: 'Signup',
    component: Signup
  },
  {
    path: '/login',
    name: 'Login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Login')
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
