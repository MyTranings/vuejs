import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import RequestsList from './pages/RequestsList.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/coaches'
    },
    {
      name: 'coaches',
      path: '/coaches',
      component: CoachesList,
      children: [
        {
          name: 'coach',
          path: '/coaches/:coachId',
          component: null,
          props: true
        }
      ]
    },
    {
      name: 'requests',
      path: '/requests',
      component: RequestsList,
    },
    {
      name: 'contact',
      path: '/contact',
      components: 'ContactCoach'
    }
  ]
})

export default router;