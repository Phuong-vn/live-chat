<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="isLogin">
      <h2>Signup to the chatroom</h2>
      <SignupForm @signup="enterChatroom" />
      <p>No account yet? <span @click="isLogin=!isLogin">Login</span> instead</p>
    </div>
    <div v-else>
      <h2>Login to the chatroom</h2>
      <LoginForm @login="enterChatroom" />
      <p>Already registered? <span @click="isLogin=!isLogin">Signup</span> instead</p>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import router from '@/router';
import SignupForm from '@/components/SignupForm.vue';
import LoginForm from '@/components/LoginForm.vue';

export default {
  components: { SignupForm, LoginForm },
  setup() {
    const isLogin = ref(false);
    const enterChatroom = () => {
      router.push({ name: 'Chatroom' });
    };
    return { isLogin, enterChatroom };
  },
}
</script>

<style>
  .welcome {
    text-align: center;
    padding: 20px 0;
  }
  /* form styles */
  .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  .welcome label {
    display: block;
    margin: 20px 0 10px;
  }
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span {
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome span:hover {
    text-decoration: none;
  }
  .welcome button {
    margin: 20px auto;
    cursor: pointer;
    transition: opacity .26s;
  }
  .welcome button:hover {
    opacity: .8;
  }
</style>