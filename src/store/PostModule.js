import axios from "axios"

export const PostModule = {
  state: () => ({
    posts: [],
    loading: true
  }),

  mutations: {
    setPosts(state, posts) {
      state.posts = posts
    },
    setLoading(state, loading) {
      state.loading = loading
    },
  },

  actions: {
    async fetchPosts({ commit }) {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        commit('setPosts', response.data)
        commit('setLoading', false)
      } catch (error) {
        console.log(error)
      }
    }
  },

  getters: {},
  namespaced: true
}