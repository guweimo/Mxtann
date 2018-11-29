import { GET_USERINFO } from "./mutation-types"
import { getUser } from '../config/getData'

export default {
    getUserInfo({commit, state}) {
        let len = Object.keys(state.userInfo)
        if (len.length > 0) {
            return true
        } else {
            getUser().then((res) => {
                if (res.data.status == 2000) {
                    commit(GET_USERINFO, res.data.data)
                }
            })
        }
    }
}
