export default {
  testAuth(state, getters, rootState, rootGetters) {
    console.log(getters)
    console.log(rootState)
    console.log(rootGetters)
    return rootState.isAuthenticated
  },
  finalCounter(state) {
    return state.counter;
  },
  normalizedCounter(_, getters) {
    const finalCounter = getters.finalCounter;
    if (finalCounter < 0) {
      return 0;
    }
    if (finalCounter > 100) {
      return 100;
    }
    return finalCounter;
  },
}