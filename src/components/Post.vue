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
        <h3 class='title'>
            <span>{{ post.id }}. </span>
            <span>{{ post.title }}</span>
        </h3>

        <p class='body'>
            {{ post.body }}
        </p>
    </div>
</template>

<style lang="scss" scoped>
.post {
    border: 1px solid #ccc;
    border-radius: .3em;
    padding: .4em;
    cursor: pointer;

    &:not(:last-child) {
        margin-bottom: .7em;
    }

    .title {
        margin-bottom: .7em;
        font-weight: 700;
    }

    .body {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>