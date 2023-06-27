import { createApp } from 'vue';

import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';

import WelcomeScreen from './pages/WelcomeScreen.vue';
import UsersList from './pages/UsersList.vue';

// Add router!
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: WelcomeScreen },
    { path: '/users', component: UsersList },
  ],
})

const app = createApp(App);

app.use(router);

// No inital transition
router.isReady().then(() => {
  app.mount('#app');
})

