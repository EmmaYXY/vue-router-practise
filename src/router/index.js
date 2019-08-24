import Vue from 'vue'
import Router from 'vue-router'
import Dynamic from '../components/Dynamic'
import Index from '../components/Index'
import Aste from '../components/Aste'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/dynamic',
    name: 'dynamic',
    component: Dynamic,
    children: [
      {
        path: '/dynamic/:name',
        component: Dynamic
      }
    ]
  },
  {
    path: '/aste-*',
    component: Aste
  }
]

export default new Router({
  routes
})
