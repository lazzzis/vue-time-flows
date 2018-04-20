import Vue from 'vue'
import App from './App'
import VueTimeFlows from '../src'

Vue.use(VueTimeFlows)

// eslint-disable-next-line
new Vue({
  el: '#app',
  render: h => h(App)
})
