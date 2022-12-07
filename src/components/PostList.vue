<script setup>
import {useStore} from 'vuex'
import {computed, onMounted} from 'vue'
import Post from './Post.vue'
import Pagination from './Pagination.vue'

const
    store = useStore(),
    searchQuerry = computed(() => store.state.post.searchQuerry),
    posts = computed(() => store.state.post.posts),
    isLoading = computed(() => store.state.post.loading),
    setSearchQuerry = (value) => store.commit('post/setSearchQuerry', value),
    searchedPosts = (value) => store.dispatch('post/searchedPosts', value),
    fetching = () => store.dispatch('post/fetchPosts')

const
    onSearch = (value) => {
        setSearchQuerry(value)
        searchedPosts(searchQuerry.value)
    }

onMounted(() => {
    fetching()
})
</script>

<template>
    <div class='posts'>
        <h1 class='posts__title'>Post List Component</h1>

        <div class='posts__search'>
            <input
                :value='searchQuerry'
                placeholder='Search...'
                @input='onSearch($event.target.value)'
            />
        </div>
            
        <div v-if='isLoading'>Loading...</div>

        <div v-if='posts'
            class='posts__wrapper'
        >
            <Post v-for='post in posts'
                :key='post.id'
                :post='post'
            />
        </div>

        <div v-else>
            Posts not found!
        </div>

        <Pagination />
    </div>
</template>

<style lang="scss" scoped>
.posts {
    min-height: 50em;
    display: flex;
    flex-direction: column;

    .posts__title {
        margin-bottom: .7em;
    }

    .posts__search {
        margin-bottom: 1em;

        & input {
            width: 100%;
            padding: .5em;
            border-radius: .3em;
        }
    }

    .posts__wrapper {
        flex: 1;
    }
}
</style>