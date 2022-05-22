import instance from '@/utils/api'

const adminModule = {
  namespaced: true,
  state: () => ({
    token: localStorage.getItem('token')?.toString() || null
  }),
  mutations: {
    CHANGE_TOKEN(state, val) {
      state.token = val
    }
  },
  actions: {
    logout({ commit }) {
      commit('CHANGE_TOKEN', null)
      localStorage.removeItem('token')
    },
    async login({ commit }, payload) {
      await instance
        .post('/auth/login/', payload)
        .then(res => {
          commit('CHANGE_TOKEN', res.data['access_token'])
          localStorage.setItem('token', res.data['access_token'])
        })
        .catch(() => commit('CHANGE_TOKEN', null))
    },
    async verify({ commit }) {
      await instance
        .post('/auth/token/verify/', { token: localStorage.getItem('token') })
        .then(() => ({}))
        .catch(() => {
          commit('CHANGE_TOKEN', null)
          localStorage.removeItem('token')
        })
    },

    async addAttachment(context, payload) {
      let bodyFormData = new FormData()
      bodyFormData.append('file', payload)
      instance.defaults.headers['Content-Type'] = 'multipart/form-data'
      return await instance
        .post('/attachments/', bodyFormData)
    },
    async addAnnouncement(context, payload) {
      await instance
        .post('/announcements/', payload)
        .then(() => ({}))
        .catch(() => ({}))
    },
    async updateAnnouncement(context, payload) {
      await instance
        .put('/announcements/' + payload.id + '/', payload)
        .then(() => ({}))
        .catch(() => ({}))
    },

    async addNews(context, payload) {
      await instance
        .post('/news/', payload)
        .then(() => ({}))
        .catch(() => ({}))
    },
    async updateNews(context, payload) {
      await instance
        .put('/news/' + payload.id + '/', payload)
        .then(() => ({}))
        .catch(() => ({}))
    },

    async addTag({ dispatch }, payload) {
      await instance
        .post('/tags/', payload)
        .then(() => ({}))
        .catch(() => ({}))
      dispatch('news/getTags', null, { root: true })
    },
    async updateTag({ dispatch }, payload) {
      await instance
        .put('/tags/' + payload.id + '/', payload)
        .then(() => ({}))
        .catch(() => ({}))
      dispatch('news/getTags', null, { root: true })
    },
    async deleteTag({ dispatch }, id) {
      await instance
        .delete('/tags/' + id + '/')
        .then(() => ({}))
        .catch(() => ({}))
      dispatch('news/getTags', null, { root: true })
    }
  }
}
export default adminModule