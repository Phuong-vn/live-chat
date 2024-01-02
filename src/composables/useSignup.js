import { ref } from "vue";
import { projectAuth } from '@/firebase/config'

const error = ref(null);

const signup = async (displayName, email, password) => {
  error.value = null

  try {
    const res = await projectAuth.createUserWithEmailAndPassword(email, password);

    if (!res) throw new Error('Could not sign up!');

    await res.user.updateProfile({ displayName });
    error.value = null;
    return res;
  } catch (err) {
    error.value = err.message;
  }
};

const useSignup = () => ({ error, signup });

export default useSignup