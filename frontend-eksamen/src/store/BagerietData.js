export default {
  namespaced: true,
  state: {
    alleNyheder: undefined,
    alleProdukter: undefined,
    sendtBesked: undefined,
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
  }
}