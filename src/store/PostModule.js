import axios from "axios"

export const PostModule = {
    state: () => ({
        posts: [],
        loading: true,
        page: 1,
        limit: 10,
        total: 0,
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
        }
    },

    actions: {
        async fetchPosts({state, commit}) {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
                    params: {
                        _page: state.page,
                        _limit: state.limit,
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
    },

    getters: {},
    namespaced: true
}