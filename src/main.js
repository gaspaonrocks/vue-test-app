import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

import '@webcomponents/custom-elements'
import 'clarity-icons'

Vue.config.productionTip = false
Vue.use(Vuex)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
