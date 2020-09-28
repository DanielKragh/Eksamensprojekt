import Vue from 'vue'
import VueRouter from 'vue-router'
import Forside from '../views/Forside.vue'
import Kontakt from '../views/Kontakt.vue'
import Produkter from '../views/Produkter.vue'
import Login from '../views/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Forside',
    component: Forside
  },
  {
    path: '/kontakt',
    name: 'Kontakt',
    component: Kontakt
  },
  {
    path: '/produkter',
    name: 'Produkter',
    component: Produkter
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
