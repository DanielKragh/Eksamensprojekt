import Vue from 'vue'
import VueRouter from 'vue-router'
import Forside from '../views/Forside.vue'
import Kontakt from '../views/Kontakt.vue'
import Produkter from '../views/Produkter.vue'
import Produkt from '../views/Produkt.vue'
import SendtBesked from '../views/SendtBesked.vue'
import SearchResult from '../views/SearchResult.vue'
import Profil from '../views/Profil.vue'
import Admin from '../views/Admin.vue'
import Nyhed from '../views/Nyhed.vue'
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
    path: '/produkt/:produktId',
    name: 'Produkt',
    component: Produkt
  },
  {
    path: '/nyhed/:nyhedId',
    name: 'Nyhed',
    component: Nyhed
  },
  {
    path: '/sendtbesked',
    name: 'SendtBesked',
    component: SendtBesked
  },
  {
    path: '/searchresult/:searchword',
    name: 'SearchResult',
    component: SearchResult
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/profil',
    name: 'Profil',
    component: Profil
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
]
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
};
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
