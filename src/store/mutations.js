import {
    TRUE_BLOG_ROUTER, 
    FALSE_BLOG_ROUTER,
    GET_NAV_DATA,
    SELECT_TYPE
} from './mutation-types'
import {request} from '@/config/axios'

export default {
    [TRUE_BLOG_ROUTER] (state) {
        state.isBlogRouter = true
    },
    [FALSE_BLOG_ROUTER] (state) {
        state.isBlogRouter = false
    },
    [GET_NAV_DATA] (state) {
        if (state.navData.length == 0) {
            request.get('/apis/home/navlist').then(res => {
                if (res.data.status == 2000) {
                    state.navData = res.data.data
                }
            })
        }
    },
    [SELECT_TYPE](state, type) {
        state.selectType = type
    }
}