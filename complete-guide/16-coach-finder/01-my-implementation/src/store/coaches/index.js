export default {
  namespaced: true,
  state() {
    return {
      isLoading: true,
      coaches: []
    }
  },
  mutations: {
    updateLoading(state, payload) {
      state.isLoading = payload.loading;
    },
    pullCoaches(state, payload) {
      state.coaches = payload;
    },
    registerCoach(state, payload) {
      state.coaches.unshift(payload.coach);
    }
  },
  actions: {
    updateLoading(context, payload) {
      context.commit('updateLoading', payload)
    },
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
            let rate = (Math.random() * 5).toFixed(2);
            rate = rate < 1 ? 1 : rate > 5 ? 5 : rate;

            return {
              id: coach.id,
              firstName: name[0],
              lastName: name[1],
              description: '', // Pull random text
              rate: rate
            }
          })
          context.commit('pullCoaches', coaches)
          context.dispatch('updateLoading', { loading: false })
        });
    },
    registerCoach(context, payload) {
      const newCoach = {
        id: Date.now(),
        ...payload.coach
      }
      context.commit('registerCoach', { coach: newCoach });
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