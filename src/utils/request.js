import axios from 'axios'

let jsonType = {
  'Content-Type': 'application/json;charset=UTF-8',
  'X-Requested-With': 'XMLHttpRequest'
}

// 请求完成拦截
axios.interceptors.response.use(function (config) {
  return config
}, function (error) {
  return Promise.reject(error)
})

export const request = {
  // get请求
  get(url, data, type, timeout = 7000) {
    let config = {
      method: 'GET',
      url: url,
      timeout,
      params: data || {},
      headers: type || {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }
    return axios(config)
  },

  // post请求
  post(url, data, type = jsonType) {
    let config = {
      method: 'POST',
      url: url,
      data: data || {},
      headers: type
    }
    return axios(config)
  }
}
