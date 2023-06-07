import { createStore } from 'vuex';

import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

import AuthModule from './modules/auth/index.js';
import ProductsModule from './modules/products/index.js';
import CartModule from './modules/cart/index.js'

const store = createStore({
  modules: {
    auth: AuthModule,
    products: ProductsModule,
    cart: CartModule
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