export const state = () => ({
  isLoggedIn: false
})

export const mutations = {
  setAuthState (state, payload) {
    state.isLoggedIn = payload
  }
}

export const actions = {
  logIn (context) {
    context.commit('setAuthState', true)
  },
  logOut (context) {
    context.commit('setAuthState', false)
  }
}

export const getters = {
  isLoggedIn: state => state.isLoggedIn
}
