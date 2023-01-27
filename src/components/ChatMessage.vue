<script setup lang="ts">

defineProps<{
    person: String,
    time: String,
    message: String,
    direction: "received" | "sent"
}>()

</script>

<template>
    <div :class="`message-container ${direction}`">
        <p class="name-time ">{{ person }} - {{ time }}</p>

        <div class="message-box">
            {{ message }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .message-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 0.5rem;
        .name-time {
            font-family: Roboto, sans-serif;
            font-size: 0.75rem;
            color: var(--light-text);
        }

        .message-box {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            width: 50%;
            
            background-color: var(--primary); 
            padding: 0.875rem;

            color: var(--light-text);
            text-align: left;
        }

    }

    .sent {
        align-items: flex-end;
        .message-box {
            background-color: var(--secondary);
            border-radius: 8px 0px 8px 8px;
        }
    }

    .received {
        align-items: flex-start;
        .message-box {
            background-color: var(--primary);
            border-radius: 0 8px 8px 8px;
        }
    }
</style>