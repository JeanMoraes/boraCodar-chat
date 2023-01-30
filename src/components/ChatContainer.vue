<script setup lang="ts">
</script>

<template>
    <main>
        <slot />
    </main>
</template>

<style scoped>

    main {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
        background-color: var(--background);
        padding: 1.5rem 2rem 4.725rem 2rem;
        box-sizing: border-box;
        overflow: hidden;
    }

</style>