import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import paper from './paper.js'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        user,
        paper
    }
})
