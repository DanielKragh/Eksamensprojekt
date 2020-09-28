export default {
  namespaced: true,
  state: {
    alleNyheder: undefined,
    alleProdukter: undefined,

  },
  mutations: {
    setAlleNyheder(state, value) {
      state.alleNyheder = value;
    }, 
    setAlleProdukter(state, value) {
      state.alleProdukter = value;
    },
  }
}