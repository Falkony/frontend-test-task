<script setup>
import PostList from '@/components/PostList.vue'
</script>

<template>
    <div class='root'>
        <PostList />
    </div>
</template>

<style lang="scss">
 @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    height: 100%;

    body {
        font-family: 'Roboto', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #303030;
        height: 100%;
        max-width: 1440px;
        margin: 0 auto;
    }
}

.root {
    padding: 1em;
}
</style>