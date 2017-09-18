import Vue from 'vue'

var bus = new Vue()

export default {
  name: 'window',
  data() {
    return {
      state: null
    }
  },
  created() {
    this.loaded()
  },
  methods: {
    loaded($route) {
      console.log('state params from windows', $route)
    }
  }
}
