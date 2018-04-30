/*
import Vue from 'vue'
import VueResource from 'vue-resource'
// import * as types from 'types'

Vue.use(VueResource)

export default {
  login ({ commit }, creds) {
    commit('LOGIN') // show spinner
    return new Promise(resolve => {
      setTimeout(() => {
        localStorage.setItem('token', 'JWT')
        commit('LOGIN_SUCCESS')
        resolve()
      }, 1000)
    })
  },
  logout ({ commit }) {
    localStorage.removeItem('token')
    commit('LOGOUT')
  },
  registerUser ({commit}, user) {
    commit('ADD_USER', user)
  },
  addNumbersToTicket ({commit}, numbers) {
    commit('ADD_TICKET', numbers)
  }
}
*/
