import { GET_USERINFO } from "./mutation-types";
import requests from '@/config/axios'

export default {
    getUserInfo({commit, state}) {
        // requests.get('').then(fu)
        commit(GET_USERINFO, info)
    }
}