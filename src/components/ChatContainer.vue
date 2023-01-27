<script setup lang="ts">
import Header from './Header.vue';

</script>

<template>
    <main>
        <Header />
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
    }

</style>