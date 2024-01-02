<template>
  <div class="chat-window">
    <div v-if="error">{{ error }}</div>
    <div v-if="documents" class="messages">
      <div v-for="document in documents" :key="document.id" class="single">
        <span class="created-at">{{ formatDistanceToNow(document.createdAt.toDate()) }}</span>
        <span class="name">{{ document.userName }}</span>
        <span class="message">{{ document.message }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import getCollection from '@/composables/getCollection';
import { formatDistanceToNow } from 'date-fns';
import { ref, onMounted, watch, onUpdated } from 'vue'

export default {
  setup() {
    const { error, documents } = getCollection('messages');
    const chatWrapper = ref(null);

    onUpdated(() => {
      chatWrapper.value = document.querySelector('.messages');
      chatWrapper.value && (chatWrapper.value.scrollTop = chatWrapper.value.scrollHeight);
    })

    return { error, documents, formatDistanceToNow }
  }
}
</script>

<style scoped>
  .chat-window {
    background: #fafafa;
    padding: 30px 20px;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
  }
  .name {
    font-weight: bold;
    margin-right: 6px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }
</style>