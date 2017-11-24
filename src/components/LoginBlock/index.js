// import $ from 'jquery'

export default {
  name: 'LoginBlock',
  computed: {
    users () {
      return this.$store.getters.users
    }
  },
  data () {
    return {
      inputName: '',
      inputPass: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', {
        username: this.inputName,
        password: this.inputPass
      }).then(res => {
        this.$router.push('/')
      })
    }
  }
}
