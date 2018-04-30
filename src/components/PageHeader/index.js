import LoginBlock from '@/components/LoginBlock/LoginBlock'

import { mapState } from 'vuex'

export default {
  name: 'PageHeader',
  data () {
    return {
      usersAmount: 4444
    }
  },
  computed: mapState({
    userName: state => state.user.name,
    userLastname: state => state.user.lastname,
    isLoggedIn: state => state.user.isLoggedIn
  }),
  methods: {
    logout () {
      console.log('logout...')
      this.$store.dispatch('logout')
        .then(() => { this.$router.push('/') })
    }
  },
  components: {
    LoginBlock
  },
  created () {
    console.log('current user: ' + this.$store.state.user.name)
    console.log('registered user: ' + this.userName + ' ' + this.userLastname)
  }
}
