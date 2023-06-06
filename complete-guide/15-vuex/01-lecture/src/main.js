import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0,
      isAuthenticated: false
    }
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
    },
    updateAuthentication(state, playload) {
      state.isAuthenticated = playload.isAuth;
    }
  },
  actions: {
    increment(context) {
      console.log(context);
      setTimeout(() => {
        context.commit('increment')
      }, 2000)
    },
    increase(context, playload) {
      console.log(context);
      setTimeout(() => {
        context.commit('increase', playload)
      }, 2000)
    },
    updateAuthentication(context) {
      context.commit('updateAuthentication', { isAuth: !context.isAuthenticated })
    },
    login(context) {
      context.commit('updateAuthentication', { isAuth: true })
    },
    logout(context) {
      context.commit('updateAuthentication', { isAuth: false })
    }
  },
  getters: {
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
    getAuthentication(state) {
      return state.isAuthenticated;
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
