import Vue from 'vue'
import Vuex from 'vuex'
import BagerietData from './BagerietData.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    BagerietData
  }
})
