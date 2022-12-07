import axios from 'axios'
import debounce from '@/js/debounce.js'

export const PostModule = {
    state: () => ({
        posts: [],
        loading: true,
        page: 1,
        limit: 10,
        total: 0,
        searchQuerry: ''
    }),

    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
        setLoading(state, loading) {
            state.loading = loading
        },
        setPage(state, page) {
            state.page = page
        },
        setTotal(state, total) {
            state.total = total
        },
        setSearchQuerry(state, searchQuerry) {
            state.searchQuerry = searchQuerry
        }
    },

    actions: {
        async fetchPosts({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
                        title_like: state.searchQuerry
                    }
                })

                commit('setTotal', Math.ceil(response.headers['x-total-count'] / state.limit))
                commit('setPosts', response.data)
            } catch (error) {
                console.log(error)
            } finally {
                commit('setLoading', false)
            }
        },
        searchedPosts: debounce(({dispatch}, title) => {
            dispatch('fetchPosts', title)
        }, 1000)
    },
    namespaced: true
}