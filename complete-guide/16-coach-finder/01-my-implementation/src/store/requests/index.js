export default {
  namespaced: true,
  state() {
    return {
      requests: []
    }
  },
  mutations: {
    fakeData(state, payload) {
      state.requests = [...payload.requests];
    },
    addRequest(state, payload) {
      state.requests.unshift(payload);
    }
  },
  actions: {
    fakeData(context) {
      const interations = parseInt((Math.random(10) * 10) + 1);
      const requests = [];

      for (let i = 0; i < interations; i += 1) {
        console.log()
        requests.push({
          id: Date.now() + i,
          coachId: parseInt(Math.random(10) * 10),
          message: 'Lorem ipsum sin dolar',
          email: 'test@sdsa.com'
        })
      }
      context.commit('fakeData', { requests: requests });
    },
    addRequest(context, payload) {
      context.commit('addRequest', payload)
    }
  },
  getters: {
    getRequests(state) {
      return state.requests;
    }
  }
}