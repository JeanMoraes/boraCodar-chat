
<script setup lang="ts">
    import { onUpdated } from 'vue';
import ChatMessage, {ChatMessageProps} from './ChatMessage.vue';

    defineProps<{ messages: ChatMessageProps[] }>()

    onUpdated(() => {
        const contentEl = document.getElementById('messages-group')
        if(contentEl) {
            contentEl.scrollTop = contentEl.scrollHeight;
        }
        
    })

</script>

<template>
    <div id="messages-group" class="content">
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
        padding-right: 1rem;
        display: flex;
        flex: 1;
        flex-direction: column;
        gap: 0.5rem;
        overflow-y: auto;

        /* ===== Scrollbar ===== */
        &::-webkit-scrollbar {
            width: 2px;
        }

        &::-webkit-scrollbar-track {
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background-color: var(--light-text);
            opacity: 0.2;
            border-radius: 0px;
        }
    }
</style>