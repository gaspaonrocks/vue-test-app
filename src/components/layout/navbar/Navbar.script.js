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
    fetchData ($route) {
      this.error = null
      this.loading = true

      // TODO Comprendre comment le router fonctionne !
      // console.log('navbar state name', $route)

      this.$http.get('/api/category').then(response => {
        this.loading = false
        this.data = response.body
        // console.log('success', this.data)
      }).catch(err => {
        this.error = err.toString()
      })
    }
  }
}
