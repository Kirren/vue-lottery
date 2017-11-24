import Vuex from 'vuex'

import LoginBlock from '@/components/LoginBlock/LoginBlock'

export default {
  name: 'PageHeader',
  data () {
    return {
      usersAmount: 4779,
      user: {
        name: 'Name Lastname',
        email: 'email@mail.com'
      }
    }
  },
  computed: {
    ...Vuex.mapGetters(['isLoggedIn'])
  },
  methods: {
    ...Vuex.mapActions(['logout'])
  },
  components: {
    LoginBlock
  }
}
