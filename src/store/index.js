import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'

Vue.use(Vuex)

const state = {
    isBlogRouter: false,    // 是否是blog路由地址
    navData: [], //  导航数据
    userInfo: {},   // 用户信息
    selectType: '',  //  选择的列表分类
    searchTitle: '', 
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})
