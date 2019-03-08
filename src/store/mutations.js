import {
    GET_NAV_DATA,
    SELECT_TYPE,
    GET_USERINFO,
    REMOVE_USERINFO,
    UPDATE_SEARCH_TITLE,
} from './mutation-types'
import { setStore, getStore } from '../config/unit'
import { getMenus } from '../apis/article'

let navName = 'navlist'

export default {
    [GET_NAV_DATA] (state) {
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
    [SELECT_TYPE](state, type) {
        state.selectType = type
    },
    [GET_USERINFO](state, info) {
        let len = Object.keys(state.userInfo)
        if (len > 0 && (state.userInfo.username !== info.username)) {
			return;
        }
		if (!info.message) {
			state.userInfo = {...info};
		} else {
			state.userInfo = {};
		}
    },
    [REMOVE_USERINFO](state, info) {
        state.userInfo = {}
    },
    [UPDATE_SEARCH_TITLE](state, title) {
        state.searchTitle = title
    },
}
