export default {
  namespaced: true,
  state: {
    alleNyheder: undefined,
    alleProdukter: undefined,
    sendtBesked: undefined,
    loggedin: false,
    loggedinBruger: undefined,
  },
  mutations: {
    setAlleNyheder(state, value) {
      state.alleNyheder = value;
    }, 
    setAlleProdukter(state, value) {
      state.alleProdukter = value;
    },
    setSendtBesked(state, value) {
      state.sendtBesked = value;
    },
    setLoggedin(state, value) {
      state.loggedin = value;
    },
    setLoggedinBruger(state, value) {
      state.loggedinBruger = value;
    },
  }
}