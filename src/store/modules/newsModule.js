import instance from '@/utils/api'

const newsModule = {
  namespaced: true,
  state: () => ({
    tags: [],
    tagsCategories: [
      {
        id: 1,
        name: 'Факультет',
        color: '#00A1FF'
      },
      {
        id: 2,
        name: 'Хакатоны',
        color: '#6A30F4'
      },
      {
        id: 3,
        name: 'Конференции',
        color: '#00DEA9'
      },
      {
        id: 4,
        name: 'Студ. жизнь',
        color: '#FF776E'
      }
    ],
    newsOne: {},
    announcement: {},
    event: {},
    article: {},
    news: [],
    events: [],
    announcements: [],
    articles: [],
    slider: []
  }),
  mutations: {
    CHANGE_TAGS(state, val) {
      state.tags = val
    },
    CHANGE_NEW(state, val) {
      state.newsOne = val
    },
    CHANGE_NEWS(state, val) {
      state.news = val
    },
    CHANGE_EVENTS(state, val) {
      state.events = val.sort((a, b) => a.id - b.id)
    },
    CHANGE_EVENT(state, val) {
      state.event = val
    },
    CHANGE_ANNOUNCEMENTS(state, val) {
      state.announcements = val
    },
    CHANGE_ANNOUNCEMENT(state, val) {
      state.announcement = val
    },
    CHANGE_ARTICLES(state, val) {
      state.articles = val
    },
    CHANGE_ARTICLE(state, val) {
      state.article = val
    },
    CHANGE_SLIDER(state, val) {
      state.slider = val
    }
  },
  actions: {
    async getTags({ commit }) {
      await instance
        .get('/tags')
        .then(res => {
          commit('CHANGE_TAGS', res.data)
        })
        .catch(() => ({}))
    },

    async getNew({ commit }, id) {
      await instance
        .get('/news/' + id)
        .then(res => {
          commit('CHANGE_NEW', res.data)
        })
        .catch(() => commit('CHANGE_NEW', {}))
    },
    async getAnnouncement({ commit }, id) {
      await instance
        .get('/announcements/' + id)
        .then(res => {
          commit('CHANGE_ANNOUNCEMENT', res.data)
        })
        .catch(() => commit('CHANGE_ANNOUNCEMENT', {}))
    },
    async getEvent({ commit }, id) {
      await instance
        .get('/events/' + id)
        .then(res => {
          commit('CHANGE_EVENT', res.data)
        })
        .catch(() => commit('CHANGE_EVENT', {}))
    },
    async getArticle({ commit }, id) {
      await instance
        .get('/articles/' + id)
        .then(res => {
          commit('CHANGE_ARTICLE', res.data)
        })
        .catch(() => commit('CHANGE_ARTICLE', {}))
    },

    async getNews({ commit }, payload = {}) {
      let params = { limit: 16, offset: (payload.page | 0) * 16 }
      if (payload.search) {
        params.search = payload.search
      }
      let tagsPath = ''
      if (payload.tags) {
        tagsPath = '?' + payload.tags.map((n) => `tags=${n}`).join('&')
      }
      await instance
        .get(`/news${tagsPath}`, {
          params: params
        })
        .then(res => {
          commit('CHANGE_NEWS', res.data)
        })
        .catch(() => ({}))
    },
    async getEvents({ commit }) {
      await instance
        .get('/events')
        .then(res => {
          commit('CHANGE_EVENTS', res.data)
        })
        .catch(() => ({}))
    },
    async getAnnouncements({ commit }, payload = {}) {
      let params = { limit: 6 }
      if (payload.page) {
        params = { limit: 16, offset: (payload.page | 0) * 16 }
      }
      await instance
        .get('/announcements', { params: params })
        .then(res => {
          commit('CHANGE_ANNOUNCEMENTS', res.data)
        })
        .catch(() => ({}))
    },
    async getArticles({ commit }) {
      await instance
        .get('/articles')
        .then(res => {
          commit('CHANGE_ARTICLES', res.data)
        })
        .catch(() => ({}))
    }
  }
}
export default newsModule