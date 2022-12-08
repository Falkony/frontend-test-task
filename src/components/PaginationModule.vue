<script setup>
import {usePosts} from '@/hooks/posts.js'

const 
    {
        page,
        limit,
        total,
        searchQuerry,
        setPage,
        fetchPosts,
        searchedPosts
    } = usePosts()

const
    onChangePage = (value) => {
        setPage(value)
        if (searchQuerry.value) {
            return searchedPosts({
                _page: page.value,
                _limit: limit.value,
                title_like: searchQuerry.value
            })
        }
        fetchPosts({
            _page: page.value,
            _limit: limit.value,
        })
    }
</script>

<template>
    <div class='wrapper-pages'>
        <div v-for='pageNumber in total'
            :class='["page", {current: page == pageNumber}]'
            @click='onChangePage(pageNumber)'
        >
            {{ pageNumber }}
        </div>
    </div>
</template>

<style lang="scss" scoped>
.wrapper-pages {
    display: flex;
    margin-top: .7em;

    .page {
        border: 1px solid #ccc;
        padding: .7em;
        cursor: pointer;
        user-select: none;
        
        &:not(:last-child) {
            margin-right: .3em;
        }
    }

    .current {
        border: 1px solid rgb(52, 48, 48)
    }
}
</style>