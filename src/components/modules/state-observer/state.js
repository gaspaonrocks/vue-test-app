import Vue from 'vue'

export const StateHub = new Vue({
  methods: {
    setState (obj) {
      if (typeof obj === 'string') {
        this.state = obj
        // console.log('statehub setting', this.state)
        this.notifyAll()
      }
    },
    getState () {
      // console.log('statehub getting', this.state)
      return this.state === undefined ? null : this.state
    },
    notifyAll () {
      this.$emit('notify')
      // console.log('statehub notifying')
    }
  }
})
