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
import Props from '../components/props/Props'
import History from '../components/history/History.vue'

Vue.use(Router)

let routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
    props: {from: 'index'}
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
    alias: '/alias',
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
  },
  {
    path: '/from',
    redirect: '/named'
  },
  {
    path: '/props/:params',
    component: Props,
    props: true
  },
  {
    path: '/history',
    component: History,
    name: 'history'
  }
]

export default new Router({
  mode: 'history',
  routes
})
