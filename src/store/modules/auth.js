// import JwtDecode from 'jwt-decode'
import Profile from '@/models/profile'

// The module is namespaced
const namespaced = true

// Initial state
const state = {
  authenticated: false,
  loaded: false,
  user: new Profile()
}

// Actions
const actions = {
  authenticated ({ commit }) {
    try {
      let jwt = localStorage.getItem('auth_token')
      // let jwt = JwtDecode(localStorage.getItem('auth_token'))
      // console.log('[Auth] Got JWT', jwt)
      commit('authenticated', jwt)
    } catch (e) {
      commit('authenticationError', e)
    }
  },

  logout ({ commit }) {
    commit('logout')
  }
}

// Mutations
const mutations = {
  authenticated (state, jwt) {
    state.authenticated = true
    // state.user.assign(jwt)
    console.log(JSON.parse(localStorage.getItem('current_user')))
  },

  authenticationError (state, e) {
    console.log('aaa authenticationError', e)
    state.error = e
    state.authenticated = false
    state.jwt = null
    state.user = new Profile()
    state.loaded = false
  },

  userLoaded (state, user) {
    state.user.assign(user)
    state.loaded = true
  },

  logout (state) {
    state.user = null
  }
}

// Getters
const getters = {
  currentUser (state) {
    return state.user
  }
}

export default {
  namespaced,
  state,
  actions,
  mutations,
  getters
}
