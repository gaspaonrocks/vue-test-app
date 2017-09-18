import Vue from 'vue'
import Router from 'vue-router'

import Hello from '@/components/common/Hello'
import Education from '@/components/common/education/Education'
import Experience from '@/components/common/experience/Experience'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    }, {
      path: '/education',
      name: 'Education',
      component: Education,
      props: true
    }, {
      path: '/experience',
      name: 'Experience',
      component: Experience,
      props: true
    }
  ]
})
