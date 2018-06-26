import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    isBlogRouter: false,    // 是否是blog路由地址
}

export default new Vuex.Store({
    state,
    mutations
})
