<script setup>
import {computed} from 'vue'
import {useStore} from 'vuex'

const
    store = useStore(),
    page = computed(() => store.state.post.page),
    total = computed(() => store.state.post.total),
    setPage = (value) => store.commit('post/setPage', value),
    fetchPosts = () => store.dispatch('post/fetchPosts')

const
    onChangePage = (value) => {
        setPage(value)
        fetchPosts()
    }
</script>

<template>
    <div class='page__wrapper'>
        <div v-for='pageNumber in total'
            :key='pageNumber'
            class='page'
            :class='{current: page == pageNumber}'
            @click='onChangePage(pageNumber)'
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.page__wrapper {
    display: flex;
    margin-top: .7em;

    .page {
        border: 1px solid #ccc;
        padding: .7em;
        cursor: pointer;
        user-select: none;
    }

    .current {
        border: 1px solid rgb(52, 48, 48)
    }
}
</style>