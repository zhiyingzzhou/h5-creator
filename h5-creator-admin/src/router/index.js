import Vue from 'vue'
import Router from 'vue-router'
import Home from 'pages/Home'
import HomeBasic from 'pages/Home-Basic'
import HomeComponent from 'pages/Home-Component'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: 'basic',
          component: HomeBasic
        },
        {
          path: 'component',
          component: HomeComponent
        }
      ]
    }
  ]
})
