import {createStore} from 'vuex'
import {PostModule} from './PostModule.js'

export default createStore({
    modules: {
        post: PostModule
    }
})
