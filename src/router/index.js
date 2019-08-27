import Vue from 'vue'
import Router from 'vue-router'
import Index from '../components/Index'
import Dynamic from '../components/DynamicRouteMatching/Dynamic'
import Aste from '../components/DynamicRouteMatching/Aste'

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
