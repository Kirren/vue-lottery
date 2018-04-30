import $ from 'jquery'

export default {
  name: 'LoginBlock',
  data () {
    return {
      inputName: '',
      inputLastname: ''
    }
  },
  methods: {
    login () {
      this.$store.dispatch('login', [this.inputName, this.inputLastname])
        .then(() => {
          this.$router.push('/success')
          $('#loginModal').modal('toggle')
        })
    }
  }
}
