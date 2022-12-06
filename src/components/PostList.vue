<script setup>
import store from '@/store'
import {computed} from 'vue'
import Post from './Post.vue'

console.log(store);

const
    posts = computed(() => store.state.post.posts),
    isLoading = computed(() => store.state.post.loading),
    fetching = () => store.dispatch('post/fetchPosts')

fetching()

</script>

<template>
    <div>
        <h1>Post List Component</h1>

        <div v-if='isLoading'>Loading...</div>

        <Post v-for='post in posts'
            :key='post.id'
            :post='post'
        />

        <p v-if='!posts'>
            Posts not found
        </p>
    </div>
</template>

<style lang="scss" scoped>

</style>