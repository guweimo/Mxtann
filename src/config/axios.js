import axios from 'axios'

export const request = {
    get(url, data, type) {
        let config = {
            method: 'GET',
            url: url,
            params: data || {},
            headers: type || {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
                'X-Requested-With': 'XMLHttpRequest',
            }
        }
        return axios(config)
    },
    post(url, data, type) {
        let config = {
            method: 'POST',
            url: url,
            data: data || {},
            headers: type || {
                'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
				'X-Requested-With': 'XMLHttpRequest',
            }
        }
        return axios(config);
    }
}