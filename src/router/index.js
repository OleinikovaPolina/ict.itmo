import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/HomeView.vue')
  },
  {
    path: '/news',
    name: 'news',
    component: () => import('../views/NewsView.vue')
  },
  {
    path: '/new/:id',
    name: 'new',
    component: () => import('../views/NewView.vue')
  },
  {
    path: '/baccalaureate',
    name: 'baccalaureate',
    component: () => import('../views/BaccalaureateView.vue')
  },
  {
    path: '/magistracy',
    name: 'magistracy',
    component: () => import('../views/MagistracyView.vue')
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue')
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue')
  },
  {
    path: '/program/:id',
    name: 'program',
    component: () => import('../views/ProgramView.vue')
  },
  {
    path: '/disciplines/:id',
    name: 'disciplines',
    component: () => import('../views/DisciplinesView.vue')
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/StudentsView.vue')
  },
  {
    path: '/login',
    name: 'login',
    quest: true,
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView()
  }
})

export default router
