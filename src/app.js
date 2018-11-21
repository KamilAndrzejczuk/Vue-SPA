import './../node_modules/bulma/css/bulma.css'
import Vue from 'vue'
import AppLayout from './theme/Layout.vue'

Vue.component('app', {
  template:
  ''
})

const app = new Vue({
  ...AppLayout
})

export { app }
