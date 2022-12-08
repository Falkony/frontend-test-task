import {useStore} from 'vuex'
import {computed} from 'vue'

export function usePosts() {
    const
        store = useStore(),
        // --- state --- //
        posts = computed(() => store.state.post.posts),
        addPosts = computed(() => store.state.post.addPosts),
        page = computed(() => store.state.post.page),
        limit = computed(() => store.state.post.limit),
        total = computed(() => store.state.post.total),
        searchQuerry = computed(() => store.state.post.searchQuerry),
        // --- commit --- //
        setPage = (value) => store.commit('post/setPage', value),
        setPosts = (value) => store.commit('post/setPosts', value),
        setAddPosts = (value) => store.commit('post/setAddPosts', value),
        setSearchQuerry = (value) => store.commit('post/setSearchQuerry', value),
        // --- dispatch --- //
        searchedPosts = (value) => store.dispatch('post/searchedPosts', value),
        fetchPosts = (value) => store.dispatch('post/fetchPosts', value)

    return {
        posts,
        addPosts,
        searchQuerry,
        page,
        total,
        limit,
        setPage,
        setPosts,
        setAddPosts,
        setSearchQuerry,
        searchedPosts,
        fetchPosts,
    }
}