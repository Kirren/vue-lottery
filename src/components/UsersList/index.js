// import $ from 'jquery'
import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

export default {
  name: 'UsersList',
  data () {
    return {
      endpoint: 'https://jsonplaceholder.typicode.com/users',
      response: [],
      users: []
    }
  },
  methods: {
    getPosts: function () {
      this.$http.get(this.endpoint).then(function (response) {
        this.response = response.data
        console.log(this.response)
      })
    }
  },
  created () {
    // this.getPosts()
  }
}
