import Vue from 'vue'
import Vuex from ''

Vue.use(Vuex)

const state = {
  users: []
}
const mutations = {
  addUser () {},
  saveNumbers () {}
}

export default new Vuex.Store({
  state,
  mutations
})
