<script setup>
import {usePosts} from '@/hooks/posts.js'

const 
    {
        page,
        limit,
        searchQuerry,
        setPage,
        setSearchQuerry,
        searchedPosts,
        fetchPosts
    } = usePosts()

const
    onSearch = (value) => {
        setSearchQuerry(value)
        if (searchQuerry.value == '') {
            return fetchPosts({
                _page: page.value,
                _limit: limit.value
            })
        }

        searchedPosts(searchQuerry.value)
        setPage(1)
    }
</script>

<template>
    <div class='search'>
        <input
            :value='searchQuerry'
            placeholder='Search...'
            @input='onSearch($event.target.value)'
        />
    </div>
</template>

<style lang="scss" scoped>
.search {
    margin-bottom: 1em;

    & input {
        width: 50%;
        padding: .5em;
        border-radius: .3em;
    }
}
</style>