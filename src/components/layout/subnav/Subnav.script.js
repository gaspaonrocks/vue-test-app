import { HTTP } from '../../modules/http/http'
import { StateHub } from '../../modules/state-observer/state'

export default {
  name: 'subnav',
  data () {
    return {
      // set variables we'll be using in the component
      loaded: false,
      error: null,
      data: null,
      route: null
    }
  },
  created () {
    // loadData according to navigation
    this.loadData()
  },
  watch: {
    '$route': 'loadData'
  },
  methods: {
    loadData () {
      this.error = null
      // reset the value to false before reaching API
      this.loaded = false

      this.route = this.$route.name.toLowerCase()
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
    },
    setState (obj) {
      return StateHub.setState(obj)
    }
  }
}
