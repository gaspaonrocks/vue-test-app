<template>
  <div id="app">
    <navbar></navbar>
    <subnav></subnav>
    <window></window>
  </div>
</template>

<script>
import Vue from 'vue'

import navbar from './components/layout/navbar/Navbar'
import subnav from './components/layout/subnav/Subnav'
import window from './components/layout/window/Window'

Vue.component('navbar', navbar)
Vue.component('window', window)
Vue.component('subnav', subnav)

export default {
  name: 'app'
}
</script>

<style>
@import '../node_modules/clarity-icons/clarity-icons.min.css';
@import '../node_modules/clarity-ui/clarity-ui.min.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
