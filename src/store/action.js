import { GET_USERINFO } from "./mutation-types"
import { getUser } from '../config/getData'

export default {
    getUserInfo({commit, state}) {
        // requests.get('').then((res) => {})
        commit(GET_USERINFO, info)
    }
}