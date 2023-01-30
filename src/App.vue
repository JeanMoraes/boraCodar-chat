<script setup lang="ts">
  import useChat from './components/useChat'
  
  import ChatContainer from './components/ChatContainer.vue'
  import Header from './components/Header.vue';
  import ChatContent from './components/ChatContent.vue';
  import ChatInputMessage from './components/ChatInputMessage.vue';

  const {
    messages,
    commitMessage
  } = useChat()

</script>

<template>
    <ChatContainer>
      <Header />
      <ChatContent :messages="messages"/>
      <ChatInputMessage @send="commitMessage" />
    </ChatContainer>
</template>
