import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    }
  },
  mutations: {
    increment(state) {
      state.counter += 2;
    },
    increase(state, payload) {
      state.counter = state.counter + payload.value;
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
    }
  }
});

const app = createApp(App);

app.use(store);

app.mount('#app');
