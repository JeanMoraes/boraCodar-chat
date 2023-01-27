<script setup lang="ts">
  import ChatContainer from './components/ChatContainer.vue'
import ChatContent from './components/ChatContent.vue';
import ChatInputMessage from './components/ChatInputMessage.vue';
</script>

<template>
    <ChatContainer>
      <ChatContent />
      <ChatInputMessage />
    </ChatContainer>
</template>
