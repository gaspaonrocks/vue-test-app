export default {
  name: 'education',
  data () {
    return {
      data: null
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.$http.get('https://jsonplaceholder.typicode.com/users').then(response => {
        this.loading = false
        this.data = response.body
        console.log('success', this.data)
      }).catch(err => {
        this.error = err.toString()
      })
    }
  }
}
