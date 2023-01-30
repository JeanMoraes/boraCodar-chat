<script setup lang="ts">

    export type ChatMessageProps = {
        person: string,
        time: string,
        message: string,
        direction: "received" | "sent"
    }

    defineProps<ChatMessageProps>()

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
        animation: appear 0.25s ease;
        .name-time {
            font-family: Roboto, sans-serif;
            font-size: 0.75rem;
            color: var(--light-text);
        }

        .message-box {
            display: flex;
            align-items: flex-start;
            width: 50%;
            
            background-color: var(--primary); 
            padding: 0.875rem;

            color: var(--light-text);
            text-align: left;

            @media screen and (min-width: 720px) {
                width: auto;
                max-width: 50%;
            }
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
            justify-content: flex-start;
        }
    }

    @keyframes appear {
	0% {
		animation-timing-function: ease-in;
		opacity: 0;
		transform: translateY(-45px);
	}
	100% {
		animation-timing-function: ease-out;
		opacity: 1;
		transform: translateY(0px);
	}
}

    
</style>