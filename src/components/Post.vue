<script setup>
defineProps({
    post: {
        type: Object,
        required: true,
    },
})
</script>

<template>
    <div class='post'>
        <h3 class='post__title'>{{ post.title }}</h3>
        <p class='post__body'>{{ post.body }}</p>
    </div>
</template>

<style lang="scss" scoped>
.post {
    border: 1px solid #ccc;
    padding: .4em;

    &:not(:last-child) {
        margin-bottom: .7em;
    }

    .post__title {
        margin-bottom: .7em;
    }
}
</style>