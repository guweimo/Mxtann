import { GET_USERINFO } from "./mutation-types"
import { getUser } from '../apis/user'
import { getStore } from '../config/unit'


export default {
    getUserInfo({commit, state}) {
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
                result.then((res) => {
                    if (res.data.status == 2000) {
                        commit(GET_USERINFO, res.data.data)
                    }
                })
            }
        }
    }
}
