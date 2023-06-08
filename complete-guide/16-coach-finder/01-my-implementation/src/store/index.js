import { createStore } from 'vuex';

import CoachesModule from './coaches/index.js'

const store = createStore({
  modules: {
    coaches: CoachesModule
  },
  state() {
    return {

    }
  }
});

export default store