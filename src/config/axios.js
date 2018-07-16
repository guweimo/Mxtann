import axios from 'axios'

let jsonType = {
	'Content-Type': 'application/json;charset=UTF-8',
	'X-Requested-With': 'XMLHttpRequest'
}

export const request = {
    get(url, data, type) {
        let config = {
            method: 'GET',
            url: url,
            params: data || {},
            headers: type || {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }
        return axios(config)
    },
    post(url, data, type) {
        let config = {
            method: 'POST',
            url: url,
            data: data || {},
            headers: type || jsonType
        }
        return axios(config);
    }
}
