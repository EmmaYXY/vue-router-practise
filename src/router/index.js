import Vue from 'vue'
import Router from 'vue-router'
import Dynamic from '../components/dynamic/Dynamic'
import Index from '../components/Index'
import Aste from '../components/dynamic/Aste'
import Nested from '../components/nested/Nested'
import Hope from '../components/nested/Hope'

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
  },
  {
    path: '/nested',
    component: Nested,
    children: [
      {
        path: 'hope',
        component: Hope
      }
    ]
  }
]

export default new Router({
  routes
})
