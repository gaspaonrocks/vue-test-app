import { StateHub } from '../../modules/state-observer/state'

export default {
  name: 'education',
  data () {
    return {
      data: null,
      state: 'default'
    }
  },
  created () {
    StateHub.$on('notify', () => {
      this.state = StateHub.getState()
      console.log('new state in component', this.state)
    })
  },
  watch: {},
  methods: {},
  computed: {}
}
