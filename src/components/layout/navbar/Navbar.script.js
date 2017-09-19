import { HTTP } from '../../modules/http/http'

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
    this.fetchData
  },
  watch: {},
  computed: {
    fetchData: function ($route) {
      this.error = null
      this.loading = true

      // TODO Comprendre comment le router fonctionne !
      // console.log('navbar state name', $route)

      HTTP.get('category')
        .then(response => {
          this.loading = false
          this.data = response.data
        })
        .catch(e => {
          this.error = e.toString()
        })
    }
  },
  methods: {}
}
