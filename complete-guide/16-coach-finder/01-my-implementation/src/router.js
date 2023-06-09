import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import PassThrough from './pages/PassThrough.vue';
import CoachRegister from './pages/CoachRegister.vue';
import RequestsList from './pages/RequestsList.vue';
import ContactCoach from './pages/ContactCoach.vue';
import CoachMember from './components/coaches/CoachMember.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: '/coaches'
    },
    {
      name: 'pass-through-coaches',
      path: '/coaches',
      component: PassThrough,
      children: [
        {
          name: 'coaches',
          path: '',
          component: CoachesList,
          props: true
        },
        {
          name: 'coach-member',
          path: ':coachId',
          component: CoachMember,
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
    },
    // Use coaches Id as a stand alone route
    // {
    //   name: 'coach-member',
    //   path: '/coaches/:coachId',
    //   component: CoachMember,
    //   props: true
    // }
  ]
})

export default router;