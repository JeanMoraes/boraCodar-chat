
<script setup lang="ts">
    import ChatMessage from './ChatMessage.vue';
</script>

<template>
    <div class="content">
       <ChatMessage
            person="Cecília"
            time="15:35"
            message="Tive uma ideia incrível para um projeto! 😍"
            direction="received"
       />
       <ChatMessage
            person="Você"
            time="15:36"
            message="Sério? Me conta mais."
            direction="sent"
       />
    </div>
</template>

<style lang="scss" scoped>
    .content {
        width: 100%;
        margin: 1rem 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
    }
</style>