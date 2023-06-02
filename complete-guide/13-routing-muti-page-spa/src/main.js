import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/teams', // our-domain.com/teams => TeamsList
      component: TeamsList
    },
    {
      path: '/users', // our-domain.com/users => UsersList
      component: UsersList
    }
  ]
});

const app = createApp(App)

app.use(router);

app.mount('#app');
