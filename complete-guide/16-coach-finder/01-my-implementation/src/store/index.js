import { createStore } from 'vuex';

import CoachesModule from './coaches/index.js'
import RequestsModule from './requests/index.js'

const store = createStore({
  modules: {
    coaches: CoachesModule,
    requests: RequestsModule
  },
  state() {
    return {

    }
  }
});

export default store