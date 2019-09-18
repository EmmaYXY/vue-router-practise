// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import Vant from 'vant'
import 'vant/lib/index.css'
import './assets/base.styl'

Vue.config.productionTip = false

Vue.use(Vant)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})
