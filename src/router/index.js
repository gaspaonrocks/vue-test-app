import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Education from '@/components/education/Education'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/Education',
      name: 'Education',
      component: Education
    }
  ]
})
