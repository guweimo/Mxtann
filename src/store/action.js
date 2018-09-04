import { GET_USERINFO } from "./mutation-types"
import { getUser } from '../config/getData'

export default {
    getUserInfo({commit, state}) {
        if (state.userInfo != null) {
            return true
        } else {
            // getUser().then((res) => {})
            commit(GET_USERINFO, info)
        }
    }
}