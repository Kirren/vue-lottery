import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'
import ProfilePage from '@/components/ProfilePage/ProfilePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/success',
      name: 'ProfilePage',
      component: ProfilePage
    }
  ]
})
