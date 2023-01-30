
<script setup lang="ts">
    import ChatMessage, {ChatMessageProps} from './ChatMessage.vue';

    defineProps<{ messages: ChatMessageProps[] }>()

</script>

<template>
    <div class="content">
       <ChatMessage
            v-for="(msg, idx) in messages"
            :key="idx"
            :person="msg.person"
            :time="msg.time"
            :message="msg.message"
            :direction="msg.direction"
       />
    </div>
</template>

<style lang="scss" scoped>
    .content {
        width: 100%;
        height: 100%;
        margin: 1rem 0 0 0;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        overflow-y: scroll;
    }
</style>