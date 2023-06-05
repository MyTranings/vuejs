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
      name: 'home',
      path: '/', // our-domain.com/ => our-domain.com/teams
      redirect: '/teams'
    },
    {
      name: 'teams',
      path: '/teams', // our-domain.com/teams => TeamsList
      component: TeamsList,
      // alias: '/' // alternative to redirect without changing the URL to ../teams
      children: [
        {
          name: 'team-members',
          path: ':teamId', // our-domain.com/teams/Id => TeamsMembers
          component: TeamMembers,
          props: true
        },
      ]
    },
    {
      path: '/users', // our-domain.com/users => UsersList
      component: UsersList
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
