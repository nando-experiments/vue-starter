export default {
  state: {
    isLoading: false
  },

  mutations: {
    'TOGGLE_PRELOADER_LOADING' (state, payload) {
      state.isLoading = payload
    }
  },

  actions: {
    actionPreloader ({ commit }, payload) {
      commit('TOGGLE_PRELOADER_LOADING', payload)
    }
  }
}
