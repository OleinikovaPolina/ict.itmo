const appModule = {
  namespaced: true,
  state: () => ({ theme: 'light' }),
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