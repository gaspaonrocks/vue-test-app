import { HTTP } from '../../modules/http/http'

export default {
  name: 'subnav',
  data () {
    return {
      // set variables we'll be using in the component
      loaded: false,
      error: null,
      data: null,
      route: null,
      state: null
    }
  },
  created () {
    // loadData according to navigation
    this.loadData()
  },
  watch: {
    // call again the method if route changes
    '$route': 'loadData'
  },
  methods: {
    loadRoute () {
      this.route = this.$route.name.toLowerCase()
    },
    loadData () {
      this.loadRoute()
      this.error = null
      // reset the value to false before reaching API
      this.loaded = false

      // don't need subnav in landing page
      if (this.route !== 'hello') {
        // calling the axios module method
        HTTP.get('subcategory', {
          // adding query parameters
          params: {
            route: this.route
          }
        })
          .then(response => {
            this.loaded = true
            this.data = response.data
          })
          .catch(e => {
            this.error = e
          })
      }
    }
  },
  props: ['data._ref']
}
