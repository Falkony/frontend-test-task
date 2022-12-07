<script setup>
defineProps({
    post: {
        type: Object,
        required: true,
    },
})

const onDrag = (e) => {
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.dropEffect = 'move'
    e.dataTransfer.setData('id', e.target.id)
}
</script>

<template>
    <div
        :id='post.id'
        class='post'
        draggable='true'
        @dragstart='onDrag($event)'
    >
        <h3 class='post__title'>{{ post.id + '. ' + post.title }}</h3>
        <p class='post__body'>{{ post.body }}</p>
    </div>
</template>

<style lang="scss" scoped>
.post {
    box-shadow: 0 2px 0 #ccc;
    border: 1px solid #ccc;
    border-radius: .3em;
    padding: .4em;

    &:not(:last-child) {
        margin-bottom: .7em;
    }

    .post__title {
        margin-bottom: .7em;
    }

    .post__body {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
}
</style>