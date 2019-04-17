import { USER } from '../mutation-types'
import { getStore, setStore } from '@/config/unit'
import { getMenus } from '@/apis/article'
import { getUser } from '@/apis/user'

const state = {
  isBlogRouter: false, // 是否是blog路由地址
  navData: [], //  导航数据
  userInfo: {}, // 用户信息
  selectType: '', //  选择的列表分类
  searchTitle: '',
}

const actions = {
  getUserInfo({ commit, state }) {
    let len = Object.keys(state.userInfo)
    if (len.length > 0) {
      return true
    } else {
      let result = null
      let userinfo = getStore('userinfo', true)
      if (userinfo) {
        result = getUser(userinfo.id)
      }
      if (result) {
        result.then(res => {
          if (res.data.status == 2000) {
            commit(USER.GET_USERINFO, res.data.data)
          }
        })
      }
    }
  }
}

let navName = 'navlist'

const mutations = {
  [USER.GET_NAV_DATA](state) {
    let navlist = getStore(navName, true)
    if (state.navData.length == 0) {
      if (navlist != null) {
        state.navData = navlist
      }
      getMenus().then(res => {
        if (res.data.status == 2000) {
          setStore(navName, res.data.data)
          state.navData = res.data.data
        }
      })
    }
  },
  [USER.SELECT_TYPE](state, type) {
    state.selectType = type
  },
  [USER.GET_USERINFO](state, info) {
    let len = Object.keys(state.userInfo)
    if (len > 0 && (state.userInfo.username !== info.username)) {
      return
    }
    state.userInfo = {}
    if (!info.message) {
      state.userInfo = { ...info }
    }
  },
  [USER.REMOVE_USERINFO](state, info) {
    state.userInfo = {}
  },
  [USER.UPDATE_SEARCH_TITLE](state, title) {
    state.searchTitle = title
  },
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
}
