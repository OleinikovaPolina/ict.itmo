const appModule = {
  namespaced: true,
  state: function() {
    return {
      theme: 'light',
      pageAdmin: [
        'login', 'published', 'createEntry', 'favorites', 'updateArticle',
        'tags', 'updateAnnouncement', 'updateNew', 'updateEvent'
      ],
      pageNoFooter: [
        'notFound', 'login', 'published', 'createEntry', 'updateArticle',
        'updateEvent', 'favorites', 'tags', 'updateAnnouncement', 'updateNew'
      ]
    }
  },
  mutations: {
    CHANGE_THEME(state, val) {
      state.theme = val
    }
  },
  actions: {
    changeTheme({ commit }, payload) {
      commit('CHANGE_THEME', payload)
      localStorage.setItem('theme', payload)
    }
  }
}
export default appModule