import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    // set 404 page to Home component
    path: '*',
    component: Home
  },
  // skills page
  {
    path: '/skills',
    name: 'Skills',
    component: () => import('../views/DetailSkills.vue')
  },
  // works page
  {
    path: '/works',
    name: 'Works',
    component: () => import('../views/DetailWorks.vue')
  },
  // profile page
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../views/Profile/Profile.vue')
  },
  // Experience
  {
    path: '/experience',
    name: 'Experience',
    component: () => import('../views/Experience.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
