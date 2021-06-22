import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // skills page
  {
    path: '/skills',
    name: 'Skills',
    component: () => import( '../views/DetailSkills.vue')
  },
  // works page
  {
    path: '/works',
    name: 'Works',
    component: () => import( '../views/DetailWorks.vue')
  },
  // profile page
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( '../views/Profile.vue')
  },
  // Experience
  {
    path: '/experience',
    name: 'Experience',
    component: () => import( '../views/Experience.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
