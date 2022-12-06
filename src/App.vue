<script setup>
import PostList from '@/components/PostList.vue'
</script>

<template>
    <div class='wrapper'>
        <PostList />
        <div>test</div>
    </div>
</template>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.wrapper {
    display: grid;
    grid-template-columns: 50% 50%;
    column-gap: 1em;
    padding: 1em;
}
</style>