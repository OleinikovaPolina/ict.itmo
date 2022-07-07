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
    component: () => import('../views/NewsView.vue'),
    meta: { title: 'Новости' }
  },
  {
    path: '/news/:id',
    name: 'new',
    component: () => import('../views/NewView.vue'),
    meta: { title: 'Новости' }
  },
  {
    path: '/announcement/:id',
    name: 'announcement',
    component: () => import('../views/AnnouncementView.vue'),
    meta: { title: 'Анонсы' }
  },
  {
    path: '/article/:id',
    name: 'article',
    component: () => import('../views/ArticleView.vue'),
    meta: { title: 'Статьи' }
  },
  {
    path: '/baccalaureate',
    name: 'baccalaureate',
    component: () => import('../views/BaccalaureateView.vue'),
    meta: { title: 'Бакалавриат' }
  },
  {
    path: '/magistracy',
    name: 'magistracy',
    component: () => import('../views/MagistracyView.vue'),
    meta: { title: 'Магистратура' }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: () => import('../views/ContactsView.vue'),
    meta: { title: 'Контакты' }
  },
  {
    path: '/events',
    name: 'events',
    component: () => import('../views/EventsView.vue'),
    meta: { title: 'События' }
  },
  {
    path: '/program/:id',
    name: 'program',
    component: () => import('../views/ProgramView.vue'),
    meta: { title: 'Программы' }
  },
  {
    path: '/disciplines/:id',
    name: 'disciplines',
    component: () => import('../views/DisciplinesView.vue'),
    meta: { title: 'Дисциплины' }
  },
  {
    path: '/students',
    name: 'students',
    component: () => import('../views/StudentsView.vue'),
    meta: { title: 'Студентам' }
  },
  {
    path: '/event/:id',
    name: 'event',
    component: () => import('../views/EventView.vue'),
    meta: { title: 'События' }
  },
  {
    path: '/login',
    name: 'login',
    meta: { quest: true, title: 'Авторизация' },
    component: () => import('../views/LoginView.vue')
  },
  {
    path: '/published',
    name: 'published',
    meta: { requiresAuth: true, title: 'Опубликованное' },
    component: () => import('../views/AdminPublishedView.vue')
  },
  {
    path: '/createEntry',
    name: 'createEntry',
    meta: { requiresAuth: true, title: 'Создание записи' },
    component: () => import('../views/AdminCreateEntryView.vue')
  },
  {
    path: '/updateAnnouncements/:id',
    name: 'updateAnnouncement',
    meta: { requiresAuth: true, title: 'Изменение анонса' },
    component: () => import('../views/AdminUpdateAnnouncementView.vue')
  },
  {
    path: '/updateNews/:id',
    name: 'updateNew',
    meta: { requiresAuth: true, title: 'Изменение новости' },
    component: () => import('../views/AdminUpdateNewsView.vue')
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta: { requiresAuth: true, title: 'Избранное' },
    component: () => import('../views/AdminFavoritesView.vue')
  },
  {
    path: '/updateEvent/:id',
    name: 'updateEvent',
    meta: { requiresAuth: true, title: 'Изменение события' },
    component: () => import('../views/AdminUpdateEventView.vue')
  },
  {
    path: '/updateArticle/:id',
    name: 'updateArticle',
    meta: { requiresAuth: true, title: 'Изменение статьи' },
    component: () => import('../views/AdminUpdateArticlesView.vue')
  },
  {
    path: '/tags',
    name: 'tags',
    meta: { requiresAuth: true, title: 'Теги' },
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
  // base: '',
  mode: 'hash',
  routes,
  scrollBehavior(to, from) {
    if (to.name !== from.name) {
      document.getElementById('app').scrollIntoView()
    }
  }
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!localStorage.getItem('token')) {
      next('/login')
      return
    }
    next()
  } else {
    next()
  }
})

router.beforeResolve(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.quest)) {
    if (localStorage.getItem('token')) {
      next('/published')
      return
    }
    next()
  } else {
    next()
  }
})

const DEFAULT_TITLE = 'Факультет ИКТ ИТМО'
router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title ? (DEFAULT_TITLE + ' | ' + to.meta.title) : DEFAULT_TITLE
  })
})
export default router
