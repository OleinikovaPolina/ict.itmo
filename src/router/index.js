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
    path: '/announcement/:id',
    name: 'announcement',
    component: () => import('../views/AnnouncementView.vue')
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
    path: '/published',
    name: 'published',
    auth: true,
    component: () => import('../views/AdminPublishedView.vue')
  },
  {
    path: '/createEntry',
    name: 'createEntry',
    auth: true,
    component: () => import('../views/AdminCreateEntryView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    auth: true,
    component: () => import('../views/AdminFavoritesView.vue')
  },
  {
    path: '/favorites/:id',
    name: 'favoritesChange',
    auth: true,
    component: () => import('../views/AdminFavoritesChangeView.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    auth: true,
    component: () => import('../views/AdminTagsView.vue')
  },
  {
    path: '*',
    name: 'notFound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  mode: 'hash',
  routes,
  scrollBehavior(to, from) {
    if (to.name !== from.name) {
      document.getElementById('app').scrollIntoView()
    }
  }
})

export default router
