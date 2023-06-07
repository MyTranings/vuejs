import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import AuthModule from './modules/auth/index.js';
import ProductsModule from './modules/products/index.js';

const store = createStore({
  modules: {
    auth: AuthModule,
    products: ProductsModule
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