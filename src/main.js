import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import MultiLanguage from 'vue-multilanguage'
import en from './assets/languages/jsons/en'
import ru from './assets/languages/jsons/ru'



Vue.use(VueRouter)

Vue.use(MultiLanguage, {
  default: 'en',
  en: en.en,
  ru: ru.ru,
})


import AboutSite from './assets/components/AboutSiteComponent.vue'
import AboutMe from './assets/components/AboutMeComponent.vue'
import Links from './assets/components/LinksComponent.vue'
import Contacts from './assets/components/ContactsComponent.vue'



const routes = [
  {
    path: '/',
    component: AboutSite,
    name: 'about-site'
  },
  {
    path: '/about-site',
    component: AboutSite,
    name: 'about-site'
  },

  {
    path: '/links',
    component: Links,
    name: 'link'

  },

  {
    path: '/about-me',
    component: AboutMe,
    name: 'about-me'
  },
  {
    path: '/contacts',
    component: Contacts,
    name: 'contacts'
  },
  {
    path: '*',
    component: AboutSite,
    name: 'about-site'
  },

]

const router = new VueRouter({
  routes,
  mode: 'history',
})
Vue.component('language-switch', require('./assets/components/LanguagesComponent.vue').default)
Vue.component('log-in-component', require('./assets/components/LogInComponent.vue').default)
new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
