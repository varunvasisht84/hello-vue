import Vue from 'vue'
import VueRouter from 'vue-router'
import Heroes from '../components/Heroes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Heroes',
    redirect: '/heroes',
    component: Heroes
  },
  {
    path: '/heroes',
    name: 'Heroes',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/Heroes.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
