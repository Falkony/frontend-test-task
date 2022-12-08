import axios from 'axios'
import throttle from '@/js/throttle.js'

export const PostModule = {
    state: () => ({
        posts: JSON.parse(localStorage.getItem('posts')) || [],
        addPosts: JSON.parse(localStorage.getItem('addPosts')) || [],
        page: JSON.parse(localStorage.getItem('page')) || 1,
        limit: 10,
        total: JSON.parse(localStorage.getItem('total')) || 0,
        searchQuerry: ''
    }),
    mutations: {
        setPosts(state, posts) {
            state.posts = posts

            if (!state.searchQuerry) {
                localStorage.setItem('posts', JSON.stringify(posts))
            }
        },
        setAddPosts(state, addPosts) {
            state.addPosts = addPosts
            localStorage.setItem('addPosts', JSON.stringify(addPosts))
        },
        setPage(state, page) {
            state.page = page
            localStorage.setItem('page', page)
        },
        setTotal(state, total) {
            state.total = total
            localStorage.setItem('total', total)
        },
        setSearchQuerry(state, searchQuerry) {
            state.searchQuerry = searchQuerry
        }
    },
    actions: {
        fetchPosts({state, commit}, querryParams) {
            axios
                .get('https://jsonplaceholder.typicode.com/posts', {
                    params: querryParams
                })
                .then(response => {
                    commit('setTotal', Math.ceil(response.headers['x-total-count'] / state.limit))
                    commit('setPosts', response.data)
                })
        },
        searchedPosts: throttle(({state, dispatch}) => {
            dispatch('fetchPosts', {
                _page: state.page,
                _limit: state.limit,
                title_like: state.searchQuerry,
            })
        }, 700)
    },
    getters: {},
    namespaced: true
}