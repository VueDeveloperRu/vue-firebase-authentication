import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [
      {
        text: 'Home',
        to: '/home'
      },
      {
        text: 'About',
        to: '/about'
      },
      {
        text: 'Blog',
        to: '/blog'
      },
      {
        text: 'Language',
        to: '/language'
      },
      {
        text: 'Contact',
        to: '/contact'
      }
    ]
  },
  getters: {
    
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
