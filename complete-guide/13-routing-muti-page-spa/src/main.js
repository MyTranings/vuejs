import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import NotFound from './components/nav/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue'
import UsersFooter from './components/users/UsersFooter.vue'

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
      meta: {
        needsAuth: true
      },
      components: {
        default: TeamsList,
        footer: TeamsFooter
      },
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
      components: {
        default: UsersList,
        footer: UsersFooter
      },
      beforeEnter(to, from, next) {
        console.log('Before Enter')
        console.log(to);
        console.log(from);
        next()
      }
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ],
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior(_, _2, savedPosition) {
    // console.log(to)
    // console.log(from)
    console.log(savedPosition)
    if (savedPosition) {
      return savedPosition
    }
    return {
      left: 0,
      top: 0
    }
  }
});

router.beforeEach(function (to, from, next) {
  console.log('Global beforeEach')
  console.log(to);
  console.log(from);
  if (to.meta.needsAuth) {
    console.log('Needs auth!')
    next();
  } else {
    next()
  }
  // if (to.name === "team-members") {
  //   next();
  // } else {
  //   // next(false);
  //   // next('/');
  //   next({ name: 'team-members', params: { teamId: 't2' } });
  // }
});

router.afterEach(function (to, from) {
  console.log('Global afterEach');
  console.log(to)
  console.log(from)
})

const app = createApp(App)

app.use(router);

app.mount('#app');
