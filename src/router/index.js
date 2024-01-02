import { createRouter, createWebHistory } from 'vue-router'
import Welcome from '@/views/Welcome.vue'
import Chatroom from '@/views/Chatroom.vue'
import { projectAuth } from '@/firebase/config';

const requireAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (user) next();
  else next({ name: 'Welcome' });
};
const requireNoAuth = (to, from, next) => {
  let user = projectAuth.currentUser;
  if (!user) next();
  else next({ name: 'Chatroom' });
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Welcome',
      component: Welcome,
      beforeEnter: requireNoAuth
    },
    {
      path: '/chatroom',
      name: 'Chatroom',
      component: Chatroom,
      beforeEnter: requireAuth
    }
  ]
})

export default router
