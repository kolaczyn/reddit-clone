import { GetterTree, ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  isLoggedIn: false
})

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {
  isLoggedIn: state => state.isLoggedIn
}

export const mutations: MutationTree<RootState> = {
  setAuthState (state, payload) {
    state.isLoggedIn = payload
  }
}

export const actions: ActionTree<RootState, RootState> = {
  logIn (context) {
    context.commit('setAuthState', true)
  },
  logOut (context) {
    context.commit('setAuthState', false)
  }
}
