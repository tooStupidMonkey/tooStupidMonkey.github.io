import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import BooComponent from './assets/components/BooComponent.vue'
import FooComponent from './assets/components/FooComponent.vue'

const routes = [
  { path: '/foo', component: FooComponent },
  { path: '/boo', component: BooComponent }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


