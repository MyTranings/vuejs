export default {
  namespaced: true,
  state() {
    return {
      isLoading: true,
      coaches: []
    }
  },
  mutations: {
    pullCoaches(state, payload) {
      state.coaches = payload;
    },
    updateLoading(state, payload) {
      state.isLoading = payload.loading;
    }
  },
  actions: {
    pullCoaches(context) {
      context.dispatch('updateLoading', { loading: true })
      // fetch('https://dummyjson.com/users/?limit=10')
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          return res.json()
        })
        .then(data => {
          console.log('fetch')
          const coaches = data.map(coach => {
            const name = coach.name.split(' ');
            return {
              id: coach.id,
              firstName: name[0],
              lastName: name[1],
              description: '', // Pull random text
              rate: '1' // Generate random decimal number between 1.0 - 5.0
            }
          })
          context.commit('pullCoaches', coaches)
          context.dispatch('updateLoading', { loading: false })
        });
    },
    updateLoading(context, payload) {
      context.commit('updateLoading', payload)
    }
  },
  getters: {
    isLoading(state) {
      return state.isLoading;
    },
    getCoaches(state) {
      return state.coaches;
    },
    getSingleCoach: (state) => (coachId) => {
      return state.coaches.find(coach => {
        return coach.id === Number(coachId)
      });
    }
  },
}