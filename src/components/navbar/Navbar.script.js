import Vue from 'vue'
import subnav from '../subnav/Subnav.vue'
import window from '../window/Window.vue'

Vue.component('subnav', subnav)
Vue.component('window', window)

export default {
  name: 'navbar',
  data () {
    return {
      loading: false,
      error: null,
      data: null
    }
  },
  created () {
    // fetch the data when view is created and the data is
    // already being observed
    this.fetchData()
  },
  watch: {
    // call again the method if route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.error = null
      this.loading = true

      this.$http.get('/api/category').then(response => {
        this.loading = false
        this.data = response.body
        console.log('success', this.data)
      }).catch(err => {
        this.error = err.toString()
      })
    }
  }
}
