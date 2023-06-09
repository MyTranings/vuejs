export default {
  namespaced: true,
  state() {
    return {
      coaches: []
    }
  },
  mutations: {
    pullCoaches(state, payload) {
      state.coaches = payload;
    }
  },
  actions: {
    pullCoaches(context) {
      // fetch('https://dummyjson.com/users/?limit=10')
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          return res.json()
        })
        .then(data => {
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
        });
    }
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    }
  },
}