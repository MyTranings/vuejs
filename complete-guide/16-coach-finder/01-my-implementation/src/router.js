import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import CoachRegister from './pages/CoachRegister.vue';
import RequestsList from './pages/RequestsList.vue';
import ContactCoach from './pages/ContactCoach.vue';

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
      name: 'coach-register',
      path: '/register',
      component: CoachRegister,
    },
    {
      name: 'requests',
      path: '/requests',
      component: RequestsList,
    },
    {
      name: 'contact',
      path: '/contact',
      component: ContactCoach
    }
  ]
})

export default router;