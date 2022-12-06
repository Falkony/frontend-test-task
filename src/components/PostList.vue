<script setup>
import {useStore} from 'vuex'
import {computed} from 'vue'
import Post from './Post.vue'
import Pagination from './Pagination.vue'

const
    store = useStore(),
    posts = computed(() => store.state.post.posts),
    isLoading = computed(() => store.state.post.loading),
    fetching = () => store.dispatch('post/fetchPosts')

fetching()

</script>

<template>
    <div class='posts'>
        <h1 class='posts__title'>Post List Component</h1>

        <div v-if='isLoading'>Loading...</div>

        <Post v-for='post in posts'
            :key='post.id'
            :post='post'
        />

        <Pagination />
    </div>
</template>

<style lang="scss" scoped>
.posts {
    .posts__title {
        margin-bottom: .7em;
    }
}
</style>