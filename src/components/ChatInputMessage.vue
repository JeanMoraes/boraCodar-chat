<script setup lang="ts">
    import sendIcon from "../assets/icons/send-icon.svg"
</script>

<template>
    <div class="input-group">
        <input type="text" placeholder="Digite sua mensagem" />
        <button>
            <img :src="sendIcon" alt="Enviar mensagem" />
        </button>
    </div>
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