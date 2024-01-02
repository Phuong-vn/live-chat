import './assets/main.css'

import { createApp } from 'vue'
import App from '@/App.vue'
import router from '@/router'
import { projectAuth } from '@/firebase/config'

let app = null;

projectAuth.onAuthStateChanged(() => {
  if (app) return;
  app = createApp(App).use(router).mount('#app');
});

