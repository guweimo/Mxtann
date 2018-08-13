import {
    TRUE_BLOG_ROUTER, 
    FALSE_BLOG_ROUTER,
    GET_NAV_DATA,
    SELECT_TYPE
} from './mutation-types'
import {request} from '@/config/axios'
import { setStore, getStore } from '@/config/unit'

let navName = 'navlist'

export default {
    [TRUE_BLOG_ROUTER] (state) {
        state.isBlogRouter = true
    },
    [FALSE_BLOG_ROUTER] (state) {
        state.isBlogRouter = false
    },
    [GET_NAV_DATA] (state) {
        let navlist = getStore(navName, true)
        if (navlist != null) {
            state.navData = navlist
        }
        if (state.navData.length == 0) {
            request.get('/apis/home/navlist').then(res => {
                if (res.data.status == 2000) {
                    setStore(navName, res.data.data)
                    state.navData = res.data.data
                }
            })
        }
    },
    [SELECT_TYPE](state, type) {
        state.selectType = type
    }
}