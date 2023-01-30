<script setup lang="ts">
</script>

<template>
    <main>
        <slot />
    </main>
</template>

<style scoped>

    main {
        width: 100%;
        height: 100%;
        background-color: var(--background);
        padding: 1.5rem 2rem;
        box-sizing: border-box;
        overflow: hidden;
    }

</style>