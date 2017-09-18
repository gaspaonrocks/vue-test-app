export default {
  name: 'subnav',
  data () {
    return {
      // set variables we'll be using in the component
      loaded: false,
      error: null,
      data: null,
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
    loadData ($route) {
      this.error = null
      // reset the value to false before reaching API
      this.loaded = false
      this.state = this.$route.name.toLowerCase()

      // don't need subnav in landing page
      if (this.state !== 'hello') {
        this.$http.get('api/subcategory', { params: { state: this.state } }).then(response => {
          this.loaded = true
          this.data = response.body

          console.log('success', this.data)
        }).catch(err => {
          this.error = err.toString()
        })
      }
    }
  }
}
