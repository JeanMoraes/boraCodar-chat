<script setup lang="ts">
    import { ref } from "vue";
    import sendIcon from "../assets/icons/send-icon.svg"

    const inputMessage = ref('')

    const emit = defineEmits({
        send(payload: string) {
            return payload
        }
    })

    function sendMessage(e: Event) {
        e.preventDefault()
        if(!inputMessage.value) return 
        
        emit('send', inputMessage.value)
        inputMessage.value = ''
    }
    
</script>

<template>
    <form @submit="sendMessage">
        <div class="input-group">
            <input
                type="text"
                name="message"
                placeholder="Digite sua mensagem"
                v-model="inputMessage"
            />
            <button type="submit">
                <img :src="sendIcon" alt="Enviar mensagem" />
            </button>
        </div>
    </form>
</template>

<style lang="scss" scoped>
    .input-group {
        position: absolute;
        bottom: 1rem;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        width: 95%;
        gap: 0.5rem;
        background-color: var(--primary-dark);
        border-radius: 999px;
        padding: 0.875rem 1.5rem;
        margin: 1rem 0 0 0;

        input {
            flex: 1;
            background: transparent;
            border: none;
            color: var(--light-text);
            outline: none;

            &::placeholder {
                color: var(--light-text);
            }
        }

        button {
            background: transparent;
            border: none;
        }
    }

</style>