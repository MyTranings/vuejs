import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import AuthModule from './modules/auth/index.js';

const store = createStore({
  modules: {
    auth: AuthModule
  },
  state() {
    return {

    }
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters,
})

export default store;