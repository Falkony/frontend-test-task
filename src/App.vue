<script setup>
import PostList from '@/components/PostList.vue'

const 
    onDrop = (e) => {
        e.stopPropagation()
        const
            data = e.dataTransfer.getData('id'),
            el = document.getElementById(data),
            dropzone = e.target

        dropzone.appendChild(el)
        e.dataTransfer.clearData()        
    },
    allowDrop = (e) => {
        e.preventDefault()
    }
</script>

<template>
    <div class='wrapper'>
        <div class='container'>
            <PostList />
        </div>

        <div
            class='container'
            @drop='onDrop($event)'
            @dragover='allowDrop($event)'
        >
            <h1 class='container__title'>Post List DropZone</h1>
        </div>
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
    grid-template-columns: 30em 30em;
    column-gap: 1em;
    padding: 1em;

    .container {
        border: 1px solid #ccc;
        border-radius: .3em;
        padding: 1em;

        .container__title {
            margin-bottom: .7em;
        }
    }
}
</style>