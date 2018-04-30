import Vue from 'vue'
import Vuex from 'vuex'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
// import types from './types'

// import $ from 'jquery'

Vue.use(Vuex)

// Mutation types
const LOGIN = 'LOGIN'
const LOGOUT = 'LOGOUT'
const ADD_TICKET = 'ADD_TICKET'
const DELETE_TICKET = 'DELETE_TICKET'

const store = new Vuex.Store({
  // State
  state: {
    user: {
      id: '',
      name: '',
      lastname: '',
      isLoggedIn: !!localStorage.getItem('token'),
      hasTicket: false,
      ticket: []
    },
    pending: false
  },
  // Mutations
  mutations: {
    [LOGIN] (state, user) {
      state.user.name = user[0]
      state.user.lastname = user[1]
      state.user.isLoggedIn = true
      localStorage.setItem('token', 'lottery cache')
      console.log('login -> user: ' + state.user.name + ' ' + state.user.lastname)
      console.log('login -> isLoggedIn: ' + state.user.isLoggedIn)
    },
    [LOGOUT] (state) {
      state.user.name = ''
      state.user.lastname = ''
      state.user.isLoggedIn = false
      localStorage.removeItem('token')
      console.log('logout -> user: ' + state.user.name + ' ' + state.user.lastname)
      console.log('logout -> isLoggedIn: ' + state.user.isLoggedIn)
    },
    [ADD_TICKET] (state, numbers) {
      state.user.ticket.push.apply(state.user.ticket, numbers)
      state.user.hasTicket = true
      console.log('after add ticket: ' + state.user.ticket)
    },
    [DELETE_TICKET] (state) {
      state.user.ticket = []
      console.log('after delete ticket: ' + state.user.ticket)
    }
  },
  // Actions
  actions: {
    login ({ commit }, user) {
      commit('LOGIN', user)
    },
    logout ({ commit }) {
      commit('LOGOUT')
    },
    addNumbersToTicket ({commit}, numbers) {
      commit('ADD_TICKET', numbers)
    },
    removeNumbersFromTicket ({commit}) {
      commit('DELETE_TICKET')
    }
  },
  // Getters
  getters: {
    user (state) {
      return state.user
    },
    ticket (state) {
      return state.user.ticket
    },
    isLoggedIn (state) {
      return state.user.isLoggedIn
    }
  }
})

export default store
