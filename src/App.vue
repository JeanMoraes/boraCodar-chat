<script setup lang="ts">
  import { ref } from 'vue';
  import ChatContainer from './components/ChatContainer.vue'
  import Header from './components/Header.vue';
  import ChatContent from './components/ChatContent.vue';
  import ChatInputMessage from './components/ChatInputMessage.vue';
  import {ChatMessageProps} from './components/ChatMessage.vue';

  import chooseRandomResponse from './utils/choose-random-response'

  const date = new Date()

  const messages = ref([
    {
      person: "Cecília",
      time: `${date.getHours().toLocaleString()}: ${date.getMinutes().toLocaleString()}`,
      message: "Tive uma ideia incrível para um projeto! 😍",
      direction: "received",
    }
  ] as ChatMessageProps[])

  function commitMessage(msg: string) {
    const date1 = new Date()
    
    const newMessage: ChatMessageProps = {
      person: 'Você',
      time: `${date1.getHours().toLocaleString()}: ${date1.getMinutes().toLocaleString()}`,
      message: msg,
      direction: 'sent'
    }

    messages.value = [...messages.value, newMessage]
    // generate a ramdom response
    generateRandomResponse()
  }

  function generateRandomResponse() {
    const date2 = new Date()
    
    const newMessage: ChatMessageProps = {
      person: 'Cecília',
      time: `${date2.getHours().toLocaleString()}: ${date2.getMinutes().toLocaleString()}`,
      message: chooseRandomResponse(),
      direction: 'received'
    }

    setTimeout(
      () => messages.value = [...messages.value, newMessage],
      Math.random() * 2 * 1000 // max to 2 seconds
    )
  }

</script>

<template>
    <ChatContainer>
      <Header />
      <ChatContent :messages="messages"/>
      <ChatInputMessage @send="commitMessage" />
    </ChatContainer>
</template>
