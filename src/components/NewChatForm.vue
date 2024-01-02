<template>
  <form>
    <textarea
      placeholder="Type a message and hit enter to send..."
      v-model="message"
      @keypress.enter.prevent="handleSubmit"
    ></textarea>
  </form>
</template>

<script>
import { ref } from 'vue';
import getUser from '@/composables/getUser';
import useCollection from '@/composables/useCollection';
import { timestamp } from '@/firebase/config';

export default {
  setup() {
    const message = ref('');
    const { user } = getUser();
    const { error, addDoc } = useCollection('messages');
    const handleSubmit = async () => {
      if (message.value.trim() === '') return;
      await addDoc({
        userName: user.value.displayName,
        message: message.value,
        createdAt: timestamp(),
      })
      !error.value && (message.value = '');
    };

    return { message, handleSubmit };
  },
}
</script>

<style scoped>
  form {
    margin: 10px;
  }
  textarea {
    width: 100%;
    max-width: 100%;
    margin-bottom: 6px;
    padding: 10px;
    box-sizing: border-box;
    border: 0;
    border-radius: 20px;
    font-family: inherit;
    outline: none;
  }
</style>