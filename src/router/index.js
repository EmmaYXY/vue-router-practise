import Vue from 'vue'
import Router from 'vue-router'
import Dynamic from '../components/dynamic/Dynamic'
import Index from '../components/Index'
import Aste from '../components/dynamic/Aste'
import Nested from '../components/nested/Nested'
import Hope from '../components/nested/Hope'
import Programmatic from '../components/programmatic/Programmatic'
import Named from '../components/named/Named'
import Bar from '../components/named/Bar'
import Content from '../components/named/Content'
import NamedNested from '../components/named/NamedNested'

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
  },
  {
    path: '/programmatic',
    component: Programmatic
  },
  {
    path: '/named',
    name: 'named',
    component: Named,
    children: [
      {
        path: 'details',
        name: 'details',
        components: {
          default: NamedNested,
          Bar: Bar,
          Content: Content
        }
      }
    ]
  }
]

export default new Router({
  routes
})
