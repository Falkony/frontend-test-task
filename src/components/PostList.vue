<script setup>
import {usePosts} from '@/hooks/posts.js'
import {computed, onMounted} from 'vue'
import draggable from 'vuedraggable'
// --- components --- //
import Post from './Post.vue'
import PaginationModule from './PaginationModule.vue'
import SearchModule from './SearchModule.vue'

const 
    {
        posts, 
        addPosts,
        page,
        limit,
        setPosts,
        setAddPosts,
        fetchPosts
    } = usePosts()

const
    allPosts = computed(() => [
        {
            id: 'posts',
            items: posts.value,
            title: 'Posts'
        },
        {
            id: 'additional_posts',
            items: addPosts.value,
            title: 'Additional posts'
        }
    ])

const
    onEnd = () => {
        setPosts(posts.value)
        setAddPosts(addPosts.value)
    }

onMounted(() => {
    // prevent fetching posts if storage exists
    if (localStorage.length > 0) {
        return
    }

    fetchPosts({
        _page: page.value,
        _limit: limit.value
    })
})
</script>

<template>
    <div class='posts'>
        <h1 class='title'>
            Posts Component
        </h1>

        <SearchModule />

        <div class='wrapper-posts'>
            <div v-for='post in allPosts'
                :key='post.id'
                class='column'
            >
                <h2 class='title'>
                    {{ post.title }}
                </h2>

                <draggable
                    class='draggable'
                    group='posts'
                    itemKey='id'
                    :emptyInsertThreshold='100'
                    :list='post.items'
                    @end='onEnd'
                >
                    <template #item='{element}'>
                        <Post :post='element' />
                    </template>
                </draggable>
            </div>
        </div>

        <PaginationModule />
    </div>  
</template>

<style lang="scss" scoped>
.posts {
    min-height: 60em;
    display: flex;
    flex-direction: column;

    .title {
        margin-bottom: .7em;
    }

    .wrapper-posts {
        display: grid;
        grid-template-columns: 50% 50%;
        gap: .5em;

        .column {
            border: 1px solid #ccc;
            border-radius: .3em;
            padding: 1em;
            min-height: 55em;

            .title {
                margin-bottom: .7em;
            }

            .draggable {
                height: 100%;
            }
        }
    }
}
</style>