import { ref } from "vue";
import { projectAuth } from '@/firebase/config';

const currentUser = ref(projectAuth.currentUser);

projectAuth.onAuthStateChanged(user => {
  currentUser.value = user;
});

const getUser = () => ({ user: currentUser });

export default getUser;