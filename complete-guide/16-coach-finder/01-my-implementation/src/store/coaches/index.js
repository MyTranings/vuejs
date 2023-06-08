export default {
  namespaced: true,
  state() {
    return {
      coaches: []
    }
  },
  mutations: {
    pullCoaches(state) {
      // fetch('https://dummyjson.com/users/?limit=10')
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          return res.json()
        })
        .then(data => {
          state.coaches = data.map(coach => {
            const name = coach.name.split(' ');
            return {
              id: coach.id,
              firstName: name[0],
              lastName: name[1],
              description: '', // Pull random text
              rate: '1' // Generate random decimal number between 1.0 - 5.0
            }
          })
        });
    }
  },
  actions: {
    pullCoaches(context) {
      context.commit('pullCoaches')
    }
  },
  getters: {
    getCoaches(state) {
      return state.coaches;
    }
  },
}