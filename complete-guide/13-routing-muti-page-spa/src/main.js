import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/', // our-domain.com/ => our-domain.com/teams
      redirect: '/teams'
    },
    {
      path: '/teams', // our-domain.com/teams => TeamsList
      component: TeamsList,
      // alias: '/' // al
    },
    {
      path: '/users', // our-domain.com/users => UsersList
      component: UsersList
    },
    {
      path: '/teams/:teamId', // our-domain.com/teams/Id => TeamsMembers
      component: TeamMembers,
      props: true
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active'
});

const app = createApp(App)

app.use(router);

app.mount('#app');
