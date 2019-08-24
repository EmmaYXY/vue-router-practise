import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../components/Demo'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: Demo
  },
  {
    path: '/demo',
    name: 'demo',
    component: Demo
  }
]

export default new Router({
  routes
})
